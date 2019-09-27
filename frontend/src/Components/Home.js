import React, {Component} from 'react';
import '../Styles/Home.css';
import television from '../Image/television.png';
import suncream from '../Image/sun-cream.png';
import picnic from '../Image/picnic-basket.png';
import hot from '../Image/hot.png';
import wind from '../Image/wind.png';
import rain from '../Image/rain.png';
import umbrella from '../Image/umbrella.png';
import fetchJsonp from 'fetch-jsonp';

const cors = require('cors');

let axios = require("axios");

const API_KEY = 'e54d20ac6a105a3f3562b4aebdd92317';
const SERVICE_KEY = 'N7EI8IngoBbxqqD2P6TC7G9voIeY6dwtKSYUunV%2BVzriu4d9Ttc0I6yGNprKytAmnLwf04vL8jBVMVKfHC%2BYhg%3D%3D';
const IP_ADDRESS = '125.177.148.186';
const apiPath = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=%EC%84%9C%EC%9A%B8&pageNo=1&numOfRows=10&ServiceKey=N7EI8IngoBbxqqD2P6TC7G9voIeY6dwtKSYUunV%2BVzriu4d9Ttc0I6yGNprKytAmnLwf04vL8jBVMVKfHC%2BYhg%3D%3D&ver=1.3';
const arr = [];


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            temperature: 0,
            temperature_max :0,
            temperature_min:0,
            name: '',
            icon: '',
            description: '',
            winds: '',
            CURRENT:[1,1],
            city_ko:'',
            dust: 'oo',
        }
    }


    getLocation = async () => {
        const { data } = await axios.get("http://ip-api.com/json/"+IP_ADDRESS);
        console.log(data);
        this.state.CURRENT = [data.lat, data.lon];
        console.log(this.state.CURRENT);
        while(true){
            if(this.state.CURRENT[0] !== 0){
                this.getWeather();
                this.getDust();
                break;
            }
        }
        setInterval(() => {
            this.getWeather();
            this.getDust();
            console.log('30 minute cycle setInterval');
        }, 1800000);
      
    }

    getWeather = () => {
        let min = 99999;
        let CITY_INDEX = 0;
        let CITY = '';
        const city_name = ['Seoul', 'Daegu', 'Busan', 'Daejeon', 'Gwangju', 'Wonju', 'Taebaek'];
        const city_name_ko = ['서울', '대구', '부산', '대전', '광주', '원주', '태백'];
        const city_location = [[37.556, 126.967], [35.841, 128.574], [35.161, 129.049], [36.338, 127.413], [35.153, 126.819], [37.306, 127.929], [37.172, 128.980]];
        for(let j=0; j<city_name.length; j++){
            arr[j] = Math.sqrt(Math.pow(city_location[j][0]-this.state.CURRENT[0],2)+Math.pow(city_location[j][1]-this.state.CURRENT[1],2))
            if (arr[j] < min){
                min = arr[j];
                CITY_INDEX = j;
            }
        }
        console.log(arr);
        CITY = city_name[CITY_INDEX];
        this.setState({city_ko:city_name_ko[CITY_INDEX]});
        console.log(CITY);
        console.log(this.state.city_ko);

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY}&APPID=${API_KEY}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    temperature: Math.floor(json.main.temp - 273.15),
                    temperature_max: Math.floor(json.main.temp_max - 273.15),
                    temperature_min: Math.floor(json.main.temp_min - 273.15),
                    name: json.weather[0].main,
                    icon: json.weather[0].icon,
                    description: json.weather[0].description,
                    winds: json.wind.speed,
                });
            });
    }


   getDust = async () => {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/');
        const posts = await res.json();
        const num = Object.keys(posts).length
        console.log('num : ', num)
        this.setState({
            dust : posts[num-1]['content']
        });
        console.log(posts);
    } catch (e) {
        console.log(e);
    }
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const {temperature,temperature_max, temperature_min, icon, city_ko, dust, } = this.state;
        const img_url = `http://openweathermap.org/img/w/${icon}.png`;
        const date = new Date();
        const currentTime = getCurrentTime(date);
        const currentDate = getCurrentDate(date);

        return (
            <div className="container">
                <div className="logo">
                    <img src={television} alt="television" align="middle"/>
                    SILVER TELEV
                </div>
                <div className="weather">
                    <div className="inner_box">
                        <div>
                            <span>
                                <img src={img_url} alt="weather_icon"/>
                            </span>
                        <span>
                                {city_ko} {/* 임시 데이터 */}
                            {temperature}ºC
                            </span>
                    </div>
                        <div>
                            <DescriptionInfo is={this.state}/>
                        </div>
                        <div>
                            <span>
                                미세먼지농도 {/* 임시 데이터 */}
                                {dust}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="time">
                    <div id="time_content">{currentTime}</div>
                    <div id="date_content">{currentDate}</div>
                </div>
            </div>

        );
    }
}

function getCurrentTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const currentTime = ampm + ' ' + hours + ':' + minutes;
    return currentTime;
}

function getCurrentDate(date) {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const year = date.getFullYear();
    let month = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    let day = date.getDate();
    day = day >= 10 ? day : '0' + day;
    const dayOfTheWeek = week[date.getDay()] + '요일';
    return year + '년' + month + '월' + day + '일' + dayOfTheWeek;
}

function DescriptionInfo(props) {
    const {temperature, name, description, winds} = props.is;
    if (temperature >= 33) {
        return (
            <span>
                <img src={hot} alt="hot" align="middle"/>
                <span className="info"> 폭염주의보</span>
            </span>
        )
    } else if (winds >= 14) {
        return (
            <span>
                <img src={wind} alt="wind" align="middle"/>
                <span className="info">강풍주의보</span>
            </span>)
    } else if (description === 'heavy intensity rain') {
        return (
            <span>
                <img src={rain} alt="rain" align="middle"/>
                <span className="info">호우주의보</span>
            </span>)
    } else if (name === 'Rain') {
        return (
            <span>
                <img src={umbrella} alt="umbrella" align="middle"/>
                <span className="info">우산을 챙기세요</span>
            </span>)
    } else if (name === 'Clear') {
        return (
            <span>
                <img src={suncream} alt="suncream" align="middle"/>
                <span id="info">외출시 선크림 필수</span>
            </span>)
    } else {
        return (
            <span>
                <img src={picnic} alt="picnic" align="middle"/>
                <span className="info">외출하기 좋은 날씨입니다</span>
            </span>)


    }

}

// class Logo extends Component {
//     render() {
//         const image_style = {
//             width: '150px',
//             height: '90px',
//         };
//         return (
//             <img src={logo} alt="logo" style={image_style}/>
//         )
//     }
// }

export default Home;