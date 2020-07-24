import React from 'React';

import WeatherSquare from './WeatherSquare'
import WeatherInfoCard from './WeatherInfoCard'

import './index.css'

class WeatherPanel extends React.Component {
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		
	}
	
	render(){
		return(
			<div>
				<div class="WeatherPanel" >
					<WeatherSquare 
						tempHi = {22}
						tempLo = {11}
						weatherType = {"cloudy"}
						weekday = {"Sunday"}
					/>
					<WeatherSquare 
						tempHi = {22}
						tempLo = {11}
						weatherType = {"cloudy"}
						weekday = {"Monday"}
					/>
					<WeatherSquare 
						tempHi = {22}
						tempLo = {11}
						weatherType = {"cloudy"}
						weekday = {"Tuesday"}
					/>
					<WeatherSquare 
						tempHi = {22}
						tempLo = {11}
						weatherType = {"sunny"}
						weekday = {"Wednesday"}
					/>
					<WeatherSquare 
						tempHi = {22}
						tempLo = {11}
						weatherType = {"sunny"}
						weekday = {"Thursday"}
					/>
					<WeatherSquare 
						tempHi = {22}
						tempLo = {11}
						weatherType = {"thunder"}
						weekday = {"Friday"}
					/>
					<WeatherSquare 
						tempHi = {22}
						tempLo = {11}
						weatherType = {"cloudy"}
						weekday = {"Saturday"}
					/>
					<WeatherInfoCard />
				</div>
			</div>
		);
	}
}

/**

<WeatherSquare 
	tempHi = {22}
	tempLo = {11}
	weatherType = {"cloudy"}
	weekday = {"Monday"}
/>

*/

export default WeatherPanel;