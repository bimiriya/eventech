import React, { Component } from 'react';
import firebase from './../firebase.js';

class Upcoming extends Component {
  
  render() {

    return (
      <div>
        {this.props.eventData ? (
          <div className="upcoming_event">
            <label htmlFor="">Nombre del evento</label>
            <h1>{this.props.eventData}</h1>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Upcoming;
