import React from 'react';
import '../styles/Weather.css'

const Weather = (props) => {
  const { temperature, city, humidity, pressure, errorMessage } = props;

  return (
    <div className='weather-container'>
      {city && <p>Location: {city}</p>}
      {temperature && <p>Temperature: {temperature}</p>}
      {humidity && <p>Humidity: {humidity}</p>}
      {pressure && <p>Pressure:  {pressure}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}
export default Weather;