import React, { Component } from 'react';
import axios from 'axios';
import MainForecast from './MainForecast';

class ContentCuaca extends Component {
  constructor() {
    super();
    this.state = {
      kota: '',
      kelembaban: '',
      suhu: '',
      cuaca: '',
      icon: ''
    }
  }
  getWeather (data) {
    this.setState({
      kota: data.name,
      kelembaban: data.main.humidity,
      suhu: Math.round(data.main.temp - 273),
      cuaca: data.weather[0].description,
      icon: data.weather[0].icon
    })
  }

  componentDidMount () {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      console.log(response.data);
      this.getWeather(response.data)
    })
    .catch(err => console.log(err))
  }

  render = () => {
    let displayIcon = 'http://openweathermap.org/img/w/' +this.state.icon+ '.png';
    return(
      <div>
        <h1 className=""> Cuaca hari ini </h1>
        <div className="card border-success mb-3" style={{width: '20rem'}}>
          <div className="card-header bg-transparent border-success">{this.state.kota}</div>
          <div className="card-body text-success">
            <p className="card-text">Kelembaban : {this.state.kelembaban} %</p>
            <p className="card-text">Temperatur : {this.state.suhu} ℃</p>
            <p className="card-text">Awan: <img src={displayIcon} alt="" />{this.state.cuaca}</p>
          </div>
          <div className="card-footer bg-transparent border-success">Sumber: OpenWeatherMap</div>
        </div>
        <hr />
        <MainForecast />
      </div>
    );
  }
}

export default ContentCuaca;
