import React, { Component } from 'react';
import Logo from '../assets/logobrand.png';
import { Link } from 'react-router-dom';


class Header extends Component {
  render = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <navbar-brand>
            <img src={Logo} width="40px" alt="" />
          </navbar-brand>
          <a className="navbar-brand" href="#">WeatherCute</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/PerkiraanCuaca">
                  <span className="nav-link">Perkiraan Cuaca</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
