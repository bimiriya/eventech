import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Carrousel extends Component {
  render() {
    return (
      <Carousel id="carrusel">
        <Carousel.Item>
          <img src="https://picsum.photos/1000/1000/?random" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/1000/1000/?random" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/1000/1000/?random" />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carrousel;
