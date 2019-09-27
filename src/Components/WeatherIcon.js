import React, {Component} from 'react';
import '../Styles/Home.css';
import clouds from '../Image/clouds.svg';
import haze from '../Image/mist.svg';
import rain from '../Image/rain.svg';
import snow from '../Image/snow.svg';
import sun from '../Image/sun.svg';

class WeatherIcon extends Component {
    render() {
        const weather_name = this.props.name;

        if(weather_name === 'Clear') {
            return (<img src={sun} className="icon" alt="sun"/>);
        } else if (weather_name === 'Haze') {
            return(<img src={haze} className="icon" alt="haze"/>);
        } else if (weather_name === 'Clouds') {
            return(<img src={clouds} className="icon" alt="clouds"/>);
        } else if (weather_name === 'Rain') {
            return(<img src={rain} className="icon" alt="rain"/>);
        } else if (weather_name === 'Snow') {
            return(<img src={snow} className="icon" alt="snow"/>);
        } else if (weather_name === 'Mist') {
            return(<img src={haze} className="icon" alt="haze"/>);
        } else {
            return(<img src={clouds} className="icon" alt="sun"/>);
        }
    }
}
export default WeatherIcon;