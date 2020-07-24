import React from 'react';
import '../App.css';

import './index.css';

class WeatherInfoCard extends React.Component {
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
				<div className="WeatherInfoCard" >
					<div className="softline">
						<h2 className="WeatherCardHeader"> Monday </h2>
					</div>
					<p>This is a test.</p>
				</div>
			);
	}
}

export default WeatherInfoCard;