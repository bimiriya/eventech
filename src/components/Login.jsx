import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase, { auth, provider } from './../firebase';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Carrousel from './Carrousel';
import NavBar from './NavBar';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null, // se inicializa el state del usuario en null
      eventData: null
    };
    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
          username: user.displayName,
          profilePic: user.photoURL
        });
      }
    });
  }

  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({});
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  myCallback = (eventData) => {
    this.setState({ eventData });
    this.props.callbackFromParent(eventData);
  }

  render() {
    return (
      <div>
        <NavBar
          auth={this.state.user}
          username={this.state.username}
          profilePic={this.state.profilePic}
          logout = {this.logout.bind(this)}
          login = {this.login.bind(this)}
          callbackFromParent={this.myCallback}
        />
        {!this.state.user ? (<Carrousel />) : null}
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
