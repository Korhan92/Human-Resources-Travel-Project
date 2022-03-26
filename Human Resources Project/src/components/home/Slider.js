import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import './Slider.css'

export default class Slider extends Component {
  render() {
    return (
      <Carousel variant="dark" className="container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/img-9.jpg"}
            alt="First "
          />
          <Carousel.Caption>
            <div className="wrapSliderSlogan">
            <h1>TRANSFER</h1>
            <span className="fs-1">You can have many advantages with our 
            Izmir Airport Transfer services.</span>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/img-4.jpg"}
            alt="Second "
          />
          <Carousel.Caption>
          <div className="wrapSliderSlogan">
          <h3>Chauffeured Car Rental & VIP Transportation</h3>
            <span className="fs-1">Vip Transport is one of our personalized services that our company organizes for you. </span>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/img-home.jpg"}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div className="wrapSliderSlogan">
            <h5>Daily & Accommodation Tours</h5>
            <p>
            With our Daily and Accommodation Tours,you will be able to experience the unique beauties to the fullest.
            </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
