import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Caroussel = ()=> {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a5c80389014901.5de7dff20a745.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>KILIE SKIN</h3>
            <p>Get your own set!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://coty.scene7.com/is/image/cotyemea/KS_MULTI_21_RoseBodLotionCocoBodWash_WS_01?$SQUARE-575x575-2X$"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>SHOP SKIN</h3>
            <p>For every skin type</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.douglas.ch/medias/d7Indn632260-6-dgl-DE.jpg?context=bWFzdGVyfGltYWdlc3wxNjYyNjB8aW1hZ2UvanBlZ3xoN2UvaGI4LzEwMzk5MTQ0ODM3MTUwL2Q3SW5kbjYzMjI2MF82X2RnbC1ERS5qcGd8YTkwNWM0MzA4Y2E5MzBjODEwNDRhNGQ5YmMwYzJkZGJiNjJmZjYxZWYyNTBjNjc2YzgzNzMyNzUyOWFkYzcyYg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>LET YOUR SKIN FEEL FREE</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Caroussel;
