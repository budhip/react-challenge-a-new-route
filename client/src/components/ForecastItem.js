import React, { Component } from 'react';

class ForecastItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tanggalan: '',
      derajatCelcius: ''
    }
  }

  componentWillMount () {
    this.setState({
      tanggalan: new Date(this.props.tanggal).toDateString(),
      derajatCelcius: Math.round(this.props.suhu - 273)
    })
  }

  render = () => {
    let displayIcon = 'http://openweathermap.org/img/w/' +this.props.icon+ '.png';
    return(
        <div className="col-sm-4 col-md-4">
          <div className="card border-success mb-3" style={{width: '20rem'}}>
            <div className="card-header bg-transparent border-success">{this.state.tanggalan}</div>
              <div className="card-body text-success">
                <p className="card-text">Kelembaban : {this.props.kelembaban} %</p>
                <p className="card-text">Temperatur : {this.state.derajatCelcius} ℃</p>
                <p className="card-text">Awan: <img src={displayIcon} alt="" />{this.props.cuaca}</p>
              </div>
            <div className="card-footer bg-transparent border-success">Sumber: OpenWeatherMap</div>
          </div>
        </div>
    );
  }
}

export default ForecastItem
