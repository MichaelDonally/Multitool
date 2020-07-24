import { createStore } from 'redux';
import weatherApp from './reducers';

const store = createStore(weatherApp);

export default store;