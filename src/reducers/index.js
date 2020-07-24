import { combineReducers } from 'redux';
import {
	ADD_WEATHER
} from '../actions'

const initialState = [];
function weatherState(state = [], action){
	switch(action.type){
		case ADD_WEATHER:
			return [
				...state,
				{
					weather: action.weather
				}
			]
		default:
			return state;
	}
}

const weatherApp = combineReducers({
	weatherState
})

export default weatherApp;