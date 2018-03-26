import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import CreateEvent from './CreateEvent';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        eventData: null
    };    
  }

  myCallback = (eventData) => {
    this.setState({ eventData });
    this.props.callbackFromParent(eventData);
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect id="nav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">
                <strong>EVENTECH</strong>
              </a>
            </Navbar.Brand>
            
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                {this.props.auth ? (
                  // <button onClick={this.handleShow}>CREATE EVENT</button>
                  <CreateEvent auth={this.props.auth} callbackFromParent={this.myCallback} />
                ): <button onClick={this.props.login}>LOGIN</button> }
              </NavItem>
              {this.props.auth ? (
                <NavDropdown
                eventKey={4}
                title={this.props.username}
                id="basic-nav-dropdown"
              >
                <img src={this.props.profilePic} alt="" />
                <MenuItem eventKey={3.1}>Mi perfil</MenuItem>
                <MenuItem eventKey={3.2}>Mis eventos</MenuItem>
                <MenuItem eventKey={3.3}>Organizados por mi</MenuItem>
                <MenuItem eventKey={3.4}>Favoritos</MenuItem>
                <MenuItem divider />
                <MenuItem onClick={this.props.logout} eventKey={3.3}>
                  Cerrar sesión
                </MenuItem>
              </NavDropdown>
              ): null }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
