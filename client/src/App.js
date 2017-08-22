import React, { Component } from 'react';
import Header from './components/Header';
import ContentCuaca from './components/ContentCuaca';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container ">
          <div className="text-center">
            <label className="label">Nama Kota</label>
            <p className="control">
              <input className="input" type="text" placeholder="--Nama Kota--" />
            </p>
          </div>
        </div>
        <hr />
        <ContentCuaca />
      </div>
    );
  }
}

export default App;
