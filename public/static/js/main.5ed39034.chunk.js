(window["webpackJsonpreact-blog"]=window["webpackJsonpreact-blog"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/clouds.3c7ffd3b.svg"},20:function(e,t,a){e.exports=a.p+"static/media/mist.676d0d5c.svg"},26:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/rain.c0e8149c.svg"},39:function(e,t,a){e.exports=a.p+"static/media/snow.517a1f67.svg"},40:function(e,t,a){e.exports=a.p+"static/media/sun.ec703dd7.svg"},48:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(36),c=a.n(s),o=a(37),i=a(6),l=a(7),u=a(9),m=a(8),p=a(10),g=a(43),d=a(11),h=a(15),f=a.n(h),E=a(18),v=(a(26),a(19)),b=a.n(v),w=a(20),j=a.n(w),N=a(38),O=a.n(N),x=a(39),H=a.n(x),y=a(40),k=a.n(y),M=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.name;return"Clear"===e?r.a.createElement("img",{src:k.a,className:"icon",alt:"sun"}):"Haze"===e?r.a.createElement("img",{src:j.a,className:"icon",alt:"haze"}):"Clouds"===e?r.a.createElement("img",{src:b.a,className:"icon",alt:"clouds"}):"Rain"===e?r.a.createElement("img",{src:O.a,className:"icon",alt:"rain"}):"Snow"===e?r.a.createElement("img",{src:H.a,className:"icon",alt:"snow"}):"Mist"===e?r.a.createElement("img",{src:j.a,className:"icon",alt:"haze"}):r.a.createElement("img",{src:b.a,className:"icon",alt:"sun"})}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.temperature,t=this.props.name,a=this.props.description,n=this.props.winds,s=new Date;return e>=33?r.a.createElement("span",null,"\ud3ed\uc5fc\uc8fc\uc758\ubcf4"):n>=14?r.a.createElement("span",null,"\uac15\ud48d\uc8fc\uc758\ubcf4"):"heavy intensity rain"===a?r.a.createElement("span",null,"\ud638\uc758\uc8fc\uc758\ubcf4"):"Rain"===t?r.a.createElement("span",null,"\uc6b0\uc0b0\uc744 \ucc59\uae30\uc138\uc694"):s.getMonth()>=3&&s.getMonth<=5?s.getHours()>=5&&s.getHours()<=12?r.a.createElement("span",null,"\ubbf8\uc138\uba3c\uc9c0 \ub18d\ub3c4\ub97c \ud655\uc778\ud558\uace0 \uc678\ucd9c\ud574\uc8fc\uc138\uc694."):s.getHours()>=13&&s.getHours()<=18?r.a.createElement("span",null,"\uc678\ucd9c\ud558\uae30 \uc88b\uc740 \ub0a0\uc528\uc5d0\uc694:)"):r.a.createElement("span",null,"\uc678\ucd9c \ud6c4 \ucf54\uc640 \uc190\uc744 \uc798 \uc53b\uc5b4\uc8fc\uc138\uc694. "):s.getMonth()+1===6?s.getHours()>=5&&s.getHours()<=12?r.a.createElement("span",null,"\uc678\ucd9c\ud558\uae30\uc804 \uc120\ud06c\ub9bc \ubc14\ub974\uae30\uc640 \uc591\uc0b0\uc740 \ud544\uc218!"):s.getHours()>=13&&s.getHours()<=18?r.a.createElement("span",null,"\ub0a0\uc528\uac00 \ub108\ubb34 \ub728\uac70\uc6b0\ub2c8 \uc678\ucd9c\uc744 \uc0bc\uac00\uc8fc\uc138\uc694."):r.a.createElement("span",null,"\ubc14\uae65 \uc0b0\ucc45\uc744 \ub2e4\ub140\uc624\uc2dc\ub294\uac74 \uc5b4\ub5a8\uae4c\uc694? "):s.getMonth()+1>=7&&s.getMonth()+1<=8?s.getHours()>=5&&s.getHours()<=12?r.a.createElement("span",null,"\uc678\ucd9c\ud558\uae30\uc804 \uc120\ud06c\ub9bc \ubc14\ub974\uae30\uc640 \uc591\uc0b0\uc740 \ud544\uc218!"):s.getHours()>=13&&s.getHours()<=18?r.a.createElement("span",{className:"info"},"\ub0a0\uc528\uac00 \ub108\ubb34 \ub728\uac70\uc6b0\ub2c8 \uc678\ucd9c\uc744 \uc0bc\uac00\uc8fc\uc138\uc694."):r.a.createElement("span",{className:"info"},"\uc5f4\ub300\uc57c \uc870\uc2ec\ud558\uc138\uc694."):s.getMonth()+1>=9&&s.getMonth()+1<=10?s.getHours()>=5&&s.getHours()<=12?r.a.createElement("span",{className:"info"},"\uc77c\uad50\ucc28\uac00 \uc2ec\ud558\ub2c8 \uac89\uc637\uc744 \uaf2d \ucc59\uae30\uc138\uc694."):s.getHours()>=13&&s.getHours()<=15?r.a.createElement("span",{className:"info"},"\uc9c0\uae08 \ud574\uac00 \ub9ce\uc774 \ub728\uac70\uc6cc\uc694."):r.a.createElement("span",{className:"info"},"\ub0a0\uc528\uac00 \ub9ce\uc774 \uc300\uc300\ud574\uc84c\uc73c\ub2c8 \uac10\uae30\uc870\uc2ec\ud558\uc138\uc694."):s.getHours()>=5&&s.getHours()<=12?r.a.createElement("span",{className:"info"},"\ub0a0\uc528\uac00 \ub9ce\uc774 \ucd94\uc6b0\ub2c8 \uc637\uc744 \ub2e8\ub2e8\ud788 \uc785\uace0 \uc678\ucd9c\ud558\uc138\uc694."):s.getHours()>=13&&s.getHours()<=17?r.a.createElement("span",{className:"info"},"\uc800\ub141\uc5d0 \ub0a0\uc528\uac00 \ub9ce\uc774 \ucd94\uc6b0\ub2c8 \uaf2d \uc7a5\uac11\uacfc \ud138\ubaa8\uc790\ub97c \ucc59\uaca8\uc8fc\uc138\uc694."):r.a.createElement("span",{className:"info"},"\ub0a0\uc528\uac00 \ub9ce\uc774 \ucd94\uc6b0\ub2c8 \uc678\ucd9c\uc740 \uc0bc\uac00\ud574\uc8fc\uc138\uc694.")}}]),t}(n.Component),R=a(54),C="e54d20ac6a105a3f3562b4aebdd92317",D="125.177.148.186",T=[];var U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getLocation=Object(E.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get("http://ip-api.com/json/"+D);case 2:t=e.sent,n=t.data,console.log(n),a.state.CURRENT=[n.lat,n.lon],console.log(a.state.CURRENT);case 7:if(0===a.state.CURRENT[0]){e.next=12;break}return a.getWeather(),a.getDust(),e.abrupt("break",14);case 12:e.next=7;break;case 14:setInterval(function(){a.getWeather(),a.getDust(),console.log("30 minute cycle setInterval")},18e5);case 15:case"end":return e.stop()}},e)})),a.getWeather=function(){for(var e,t=99999,n=0,r=["Seoul","Daegu","Busan","Daejeon","Gwangju","Wonju","Taebaek"],s=[[37.556,126.967],[35.841,128.574],[35.161,129.049],[36.338,127.413],[35.153,126.819],[37.306,127.929],[37.172,128.98]],c=0;c<r.length;c++)T[c]=Math.sqrt(Math.pow(s[c][0]-a.state.CURRENT[0],2)+Math.pow(s[c][1]-a.state.CURRENT[1],2)),T[c]<t&&(t=T[c],n=c);console.log(T),e=r[n],a.setState({city_ko:["\uc11c\uc6b8","\ub300\uad6c","\ubd80\uc0b0","\ub300\uc804","\uad11\uc8fc","\uc6d0\uc8fc","\ud0dc\ubc31"][n]}),console.log(e),console.log(a.state.city_ko),fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=").concat(C)).then(function(e){return e.json()}).then(function(e){a.setState({temperature:Math.floor(e.main.temp-273.15),temperature_max:Math.floor(e.main.temp_max-273.15),temperature_min:Math.floor(e.main.temp_min-273.15),name:e.weather[0].main,icon:e.weather[0].icon,description:e.weather[0].description,winds:e.wind.speed})})},a.getDust=Object(E.a)(f.a.mark(function e(){var t,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://127.0.0.1:8000/api/");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r=Object.keys(n).length,console.log("num : ",r),a.setState({dust:n[r-1].content}),console.log(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])})),a.state={temperature:0,temperature_max:0,temperature_min:0,name:"",icon:"",description:"",winds:"",CURRENT:[1,1],city_ko:"",dust:"oo"},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getLocation()}},{key:"render",value:function(){var e=this.state,t=e.temperature,a=e.temperature_max,n=e.temperature_min,s=(e.icon,new Date),c=function(e){var t=e.getHours(),a=e.getMinutes();return(t>=12?"\uc624\ud6c4":"\uc624\uc804")+" "+(t=(t%=12)||12)+" : "+(a=a<10?"0"+a:a)}(s),o=function(e){var t=e.getFullYear(),a=1+e.getMonth();a=a>=10?a:"0"+a;var n=e.getDate();n=n>=10?n:"0"+n;var r=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"][e.getDay()]+"\uc694\uc77c";return t+"\ub144 "+a+"\uc6d4 "+n+"\uc77c"+r}(s);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"weather_icon"},r.a.createElement(M,{name:this.state.name,id:"weather_icon"})),r.a.createElement("div",{className:"temperature"},t,r.a.createElement("sup",{id:"c"},"\xba"),"C"),r.a.createElement("div",{className:"temperature_info"},r.a.createElement("div",{className:"temperature_minmax"},r.a.createElement("span",{id:"temperature_min"},n,r.a.createElement("sup",{className:"c"},"\xba"))," /",r.a.createElement("span",{id:"temperature_max"}," ",a,r.a.createElement("sup",{className:"c"},"\xba"))),r.a.createElement("div",null,r.a.createElement(_,{temperature:t,name:this.state.name,description:this.state.description,winds:this.state.winds}))),r.a.createElement("div",{className:"date"},r.a.createElement("div",{id:"year"},o.substring(0,13)),r.a.createElement("div",{id:"mon"},o.substring(13,16))),r.a.createElement("div",{className:"time"},r.a.createElement("div",{id:"ampm"},c.substring(0,2)),r.a.createElement("div",{id:"time"},c.substring(3))))}}]),t}(n.Component),S=function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:U}))};function I(){var e=Object(o.a)(["\n  margin: 0 auto;\n  display: flex;\n  width: 100%;\n  flex-flow: row wrap;\n"]);return I=function(){return e},e}var W=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(z,null,r.a.createElement(S,null))}}]),t}(n.Component),z=g.a.div(I()),q=W,B=a(17);c.a.render(r.a.createElement(B.a,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.5ed39034.chunk.js.map