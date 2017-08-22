import React, { Component } from 'react';
import axios from 'axios';
import ForecastItem from './ForecastItem';

class MainForecast extends Component{
  constructor () {
    super()
    this.state = {
      weatherList: []
    }
    this.getWeathers = this.getWeathers.bind(this)
  }

  getWeathers (data) {
    this.setState({
      weatherList: data
    })
  }

  componentWillMount () {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Jakarta&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      console.log('ini MainForecast',response.data.list);
      this.getWeathers(response.data.list)
    })
    .catch(err => console.log(err))
  }

  render = () => {
    return(
      <div>
        <h1>Perkiraan cuaca</h1>
        <div className="row">
          {this.state.weatherList.map((weather, index) => (
            (weather.dt_txt.includes("06:00:00")) ? <ForecastItem
            cuaca = {
              weather.weather[0].description
            }
            icon = {
              weather.weather[0].icon
            }
            tanggal = {
              weather.dt_txt
            }
            kelembaban = {
              weather.main.humidity
            }
            suhu = {
              weather.main.temp
            }
            key = {
              index
            }
            /> : ''
          ))}
        </div>
      </div>
    );
  }
}

export default MainForecast;
