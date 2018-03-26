import React, { Component } from 'react';
import { Modal, Button, OverlayTrigger, ControlLabel, FormControl, Row, Col, FormGroup } from 'react-bootstrap';
import firebase from './../firebase.js';

class CreateEvent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      inputVal: '',
      items: null
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleClose();
    const data = this.state.inputVal;
    this.props.callbackFromParent(data);
    this.saveFirebase();
  };

  handleChange(event) {
    this.setState({ inputVal: event.target.value })    
  };

  saveFirebase() {
    const itemsRef = firebase.database().ref('upcoming').child(this.props.auth.uid);
    itemsRef.push({
      name: this.state.inputVal
    });
  };
  
  componentWillMount() {
    const itemsRef = firebase.database().ref('upcoming');
    itemsRef.on('value', (snapshot) => {
      this.setState({
        items: snapshot.val()
      });
    })
    console.log(this.state.items)
  }

  render() {
    return (
      <div>
        <Button className="crear" bsStyle="primary" bsSize="small" onClick={this.handleShow}>
          CREAR EVENTO
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="crear" >Crear Evento</Modal.Title>
            </Modal.Header>
            <form>
            <Modal.Body>
              <input value={this.state.inputVal} onChange={this.handleChange} type="text" placeholder="Título del evento" />
              <select name="" id="">
                <option>Categoría</option>
              </select>
              <input type="text" placeholder="Dirección" />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
              <Button type="submit" onClick={this.handleSubmit} >Continuar</Button>
            </Modal.Footer>
            </form>
        </Modal>
        {/* {this.state.items.map((item) => {
        return (
          <div key={item.name}>
            <h3>{item.name}</h3>
          </div>
        )
      })} */}
      </div>
    );
  }
}

export default CreateEvent;
