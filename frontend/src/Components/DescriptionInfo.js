import React, {Component} from 'react';

class DescriptionInfo extends Component {
    render() {

        const temperature = this.props.temperature;
        const name = this.props.name;
        const description = this.props.description;
        const winds = this.props.winds;
        const d = new Date();

        if(temperature >= 33) {
            return (<span>폭염주의보</span>);
        } else if(winds >= 14) {
            return (<span>강풍주의보</span>);
        } else if (description === 'heavy intensity rain') {
            return(<span>호의주의보</span>)
        } else if (name === 'Rain') {
            return(<span>우산을 챙기세요</span>);
        } else if (d.getMonth() >= 3 && d.getMonth <= 5) {
            if(d.getHours() >= 5 && d.getHours() <=12) {
                return(<span>미세먼지 농도를 확인하고 외출해주세요.</span>);
            } else if(d.getHours() >= 13 && d.getHours() <= 18) {
                return(<span>외출하기 좋은 날씨에요:)</span>);
            } else {
                return(<span>외출 후 코와 손을 잘 씻어주세요. </span>);
            }
        } else if(d.getMonth()+1 === 6) {
            if(d.getHours() >= 5 && d.getHours() <= 12) {
                return(<span>외출하기전 선크림 바르기와 양산은 필수!</span>);
            } else if(d.getHours() >= 13 && d.getHours() <= 18) {
                return (<span>날씨가 너무 뜨거우니 외출을 삼가주세요.</span>);
            } else {
                return(<span>바깥 산책을 다녀오시는건 어떨까요? </span>);
            }
        } else if (d.getMonth()+1 >= 7 && d.getMonth()+1 <=8 ) {
            if(d.getHours() >= 5 && d.getHours() <= 12) {
                return (<span>외출하기전 선크림 바르기와 양산은 필수!</span>);
            } else if(d.getHours() >= 13 && d.getHours() <= 18) {
                return(<span className="info">날씨가 너무 뜨거우니 외출을 삼가주세요.</span>);
            } else {
                return(<span className="info">열대야 조심하세요.</span>);
            }
        } else if (d.getMonth()+1 >=9 && d.getMonth()+1 <= 10 ) {
            if(d.getHours() >= 5 && d.getHours() <= 12) {
                return(<span className="info">일교차가 심하니 겉옷을 꼭 챙기세요.</span>);
            } else if(d.getHours() >= 13 && d.getHours() <= 15) {
                return(<span className="info">지금 해가 많이 뜨거워요.</span>);
            } else {
                return(<span className="info">날씨가 많이 쌀쌀해졌으니 감기조심하세요.</span>);
            }
        } else {
            if(d.getHours() >= 5 && d.getHours() <= 12) {
                return(<span className="info">날씨가 많이 추우니 옷을 단단히 입고 외출하세요.</span>);
            } else if(d.getHours() >= 13 && d.getHours() <= 17) {
                return(<span className="info">저녁에 날씨가 많이 추우니 꼭 장갑과 털모자를 챙겨주세요.</span>);
            } else {
                return(<span className="info">날씨가 많이 추우니 외출은 삼가해주세요.</span>);
            }
        }
    }
}
export default DescriptionInfo;