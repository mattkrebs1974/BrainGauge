import React, { Component } from "react";

export default class Home extends Component {
  componentDidMount() {
    sessionStorage.clear();
    console.log("Home Component DID MOUNT!");
     sessionStorage.setItem("loggedin", false);
    
  }

  render() {
    return (
      <div>
        <div className="title">Brain Gauge</div>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-center">
          <img className="image" src={require("../img/front.png")} alt="logo" />
        </div>
        <br></br>
        <br></br>
        <div className="explanation">
          {" "}
          This is the App that measures your mental responsiveness and tells you
          when you are at your best.{" "}
        </div>
        <div className="enter forgot-password text-right">
          <br />
        </div>
      </div>
    );
  }
}
