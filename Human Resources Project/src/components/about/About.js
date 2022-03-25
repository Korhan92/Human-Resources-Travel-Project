import React, { Component } from "react";
import "./aboutus.css";
export default class About extends Component {
  render() {
    return (
      <div className="aboutHead d-flex justify-content-center align-items-center">
        <div className="aboutCenter">
          <h1>Tokgoz Travel Agency</h1>
          <hr />
          <p>
          We aim to work with a customer-oriented 
          approach with a superior service understanding and creative solutions.
          </p>
          <h2>Our Vision</h2>
          <hr />
          <p>
          By closely following the developing tourism market, 
          it aims to provide its customers with a high quality 
          service and a service that is aware of innovations.
          </p>
          <div className="buttonGroup d-flex justify-content-evenly mt-5">
            <button type="button" className="btn btn-dark">Our Mission</button>
            <button type="button" className="btn btn-dark">More İnformation</button>
          </div>
        </div>
      </div>
    );
  }
}
