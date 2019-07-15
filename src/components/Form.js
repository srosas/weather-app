import React from 'react';
import '../styles/Form.css';

const Form = (props) => {
  const { getWeather, selector } = props;
  if (selector === 'city') {
    return (
      <form onSubmit={getWeather}>
        <input className='form-field' type="text" name="city" placeholder="Enter city" />
        <button>Get Weather</button>
      </form>
    )
  }
  else
    return (
      <form onSubmit={getWeather}>
        <input className='form-field' type="text" name="latitude" placeholder="Enter Latitude" />
        <input className='form-field' type="text" name="longitude" placeholder="Enter Longitude" />
        <button>Get Weather</button>
      </form>
    )
}
export default Form;