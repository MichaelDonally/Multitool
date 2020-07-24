import React from 'react';
import './App.css';

import WeatherPanel from './components/WeatherPanel.js';

function App() {
  return (
    <div className="App">
      <header className="Multitool">
		<WeatherPanel />
      </header>
    </div>
  );
}

export default App;
