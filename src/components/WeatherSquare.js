import React from 'react';
import '../App.css';

import './index.css';
import rain from './images/rain.png';
import thunder from './images/thunder.png';
import cloudy from './images/cloudy.png';
import sunny from './images/sunny.png';
import error from './images/error.png';

//Axios
import axios from 'axios';

//Access the redux store
import store from '../store'
import {
	addWeather
} from '../actions';


/* Helper Functions */
function getWeatherIcon(type){
	if(type == "sunny") {
		return <img src={sunny} alt="Sunny"></img>;
	}
	if(type == "rain") {
		return <img src={rain} alt="Rain"></img>;
	}
	if(type == "cloudy") {
		return <img src={cloudy} alt="Cloudy"></img>;
	}
	if(type == "thunder"){
		return <img src={thunder} alt="Thunder"></img>;
	}
	
	return <img src={error} alt="Error"></img>;
}

function axiosTestCall(){
	//These are the parameters of the weather api
	let apiKey = '92f58de99f20970f50d55759472117c6';
	let city = 'ottawa';
	let lat = '45.365707';
	let lon = '-75.789399';
	let exclude = 'hourly,minutely,current';
	let units = 'metric';

	let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=${exclude}&appid=${apiKey}`;
	
	axios.get(url).then(res => {
		var daily = res.data.daily;
		console.log(JSON.stringify(daily));
		console.log("TEST:" + JSON.stringify(daily.length));
		
		decodeDay(daily[0]);
	});
}

// Covnerts raw data from the daily data from the weather API and dispatches it to the store
function decodeDay(dayData){
	//Time of the prediction is 5PM for each given day
	
	var dayTemp = dayData.temp.day;
	var nightTemp = dayData.temp.night;
	
	var weatherType = dayData.weather[0].main;
	
	var day = {"dayTemp" : dayTemp, "nightTemp" : nightTemp, "weatherType" : weatherType};
	//console.log();
	console.log("Day is: " + JSON.stringify(day));
}

class WeatherSquare extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			tempHi: this.props.tempHi,
			tempLo: this.props.tempLo,
			weatherType: this.props.weatherType,
			weekday: this.props.weekday
		};
	}
	
	render(){
			return(
				<button className="WeatherSquare" onClick={axiosTestCall}>
					<div className="Day" >
						{this.state.weekday}
					</div>
					<div className="Type" >
						{getWeatherIcon(this.state.weatherType)}
					</div>
					<div className="Temp" >
						{this.state.tempHi}, {this.state.tempLo}
					</div>
				</button>
			);
	}
}

export default WeatherSquare;