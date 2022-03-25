import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default class HomeForm extends Component {
  state = {
    isSubmit: false,
  };

  render() {
    const submitForm = (event) => {
      event.preventDefault();
      this.setState({ isSubmit: true });
    };
    return (
      <div className="container p-3 my-3 rounded-3 homeForm">
        <h1 className="text-light">Contact Us</h1>
        <hr style={{color:"black"}} />
        <div className="homeFormWrap d-flex justify-content-between">
          <div className="homeFormLeft px-3 text-dark">
            <h2>Tokgoz Tourism Travel Agency</h2>
            <p>
            Our Tokgöz Tourism Transportation and Car Rental company, 
            which has been serving since 2003, in May 2018, Lets Tatil Turizm Org. 
            Thing. Rock. Food Cons. San ve Tic. Ltd. Sti. has 
            taken the first step to start agency activity by establishing.
            </p>
            <p>
            This initiative then continues as a member of the Association of 
            Turkish Travel Agencies, numbered 11017, under the name of Transfer Turizm.
            </p>
          
          </div>
          <div className="homeFormRight align-items-center">
            <Form onSubmit={(e) => submitForm(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="my-4"
                  type="text"
                  placeholder="Enter Full Name"
                />
                <Form.Control type="text" placeholder="Enter username" />
                <Form.Control
                  className="my-4"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            
          </div>
        </div>
        <h6
              style={
                this.state.isSubmit
                  ? { display: "block", color: "white", padding: "20px",backgroundColor:"green" }
                  : { display: "none" }
              }
            >
              <span style={{fontSize:"25px",color:"red",padding:"0px 10px"}}>*</span>
              The information you sent has been forwarded to us.
            </h6>
      </div>
    );
  }
}
