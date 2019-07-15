import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      humidity: undefined,
      pressure: undefined,
      errorMessage: '',
      selector: 'city'
    }
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }
  handleSelectorChange = (event) => {
    this.setState({
      selector: event.target.value,
      errorMessage: ''
    })
  }

  getWeather = (event) => {
    event.preventDefault();
    const apiKey = 'f8cfe2d694b5a1d4788e7b93355ff5ad';
    let currentCity, url, latitude, longitude;

    if (this.state.selector === 'city') {
      currentCity = event.target.elements.city.value;
      url = `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&APPID=${apiKey}`
    }
    else {
      latitude = event.target.elements.latitude.value;
      longitude = event.target.elements.longitude.value;
      url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${apiKey}`
    }
    if (currentCity || (latitude && longitude)) {
      fetch(url)
        .then(res => res.json())
        .then(response => {
          this.setState({
            temperature: response.main.temp,
            city: response.name,
            humidity: response.main.humidity,
            pressure: response.main.pressure,
            errorMessage: ''
          })
        })
        .catch(err => console.log(err))

    } else {
      this.setState({
        errorMessage: 'Please enter values'
      })
    }
  }

  render() {
    const { temperature, city, humidity, pressure, errorMessage, selector } = this.state;
    return (
      <div className='app'>
        <Header handleSelectorChange={this.handleSelectorChange} selector={selector} />
        <Form getWeather={this.getWeather} selector={selector} />
        <Weather
          temperature={temperature}
          city={city}
          humidity={humidity}
          pressure={pressure}
          errorMessage={errorMessage} />
      </div>
    );
  }
}

export default App;
