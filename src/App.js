import React, { Component } from 'react';
import Login from './components/Login';
import Upcoming from './components/Upcoming';
import './components/components.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        eventData: null
    };    
  }

  myCallback = (eventData) => {
    this.setState({ eventData });
    
  }


  render() {
    return (
      <div className="App">
        <Login callbackFromParent={this.myCallback} />
        <Upcoming eventData={this.state.eventData} />
      </div>
    );
  }
}

export default App;
