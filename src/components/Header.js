import React from 'react';
import '../styles/Header.css';

const Header = (props) => {
  const { selector, handleSelectorChange } = props;
  return (
    <div className='header'>
      <h1>Weather App</h1>
      <p> Find the weather based on city or latitude/longitude </p>
      <select className='selector' id="selector" onChange={handleSelectorChange} value={selector}>
        <option className='option' value="city">City</option>
        <option className='option' value="latlong">Latitude and Longitude</option>
      </select>
    </div>
  )
}
export default Header;