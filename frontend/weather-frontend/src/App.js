import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(res.data);
    } catch (error) {
      alert('City not found!');
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>🌡️ Temp: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌥️ Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
