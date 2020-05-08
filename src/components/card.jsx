import React, { Component } from 'react';
// import flats from '../data/flats';

class Card extends Component {
  render() {

    return (
      <div className="card">
        <div className="card-description" style={{ backgroundImage: `url(${this.props.imageUrl})` }}>
          <h2>
            {this.props.name}
          </h2>
        </div>
      </div>
    );
  }
}

export default Card;
