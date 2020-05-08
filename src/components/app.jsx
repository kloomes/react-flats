import React, { Component } from 'react';
import GoogleMapReact from './google_map_react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          Flat List
        </div>
        <div className="map-container">
          <GoogleMapReact />
        </div>
      </div>
    );
  }
}

export default App;
