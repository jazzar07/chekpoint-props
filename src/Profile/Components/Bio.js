import React, { Component } from "react";
import img from "./Image/bb.jpg";

class Bio extends Component {
  render() {
    const myStyle = { color: "blue", fontSize: "2.3rem", margin: "15px" };
    return (
      <div className="media">
        <img
          src={img}
          className="bb"
          alt="bb"
          style={{ width: "20%", height: "20%", borderRadius: "40%" }}
        />
        <div className="body">
          <span style={myStyle}>Age: 26</span> {this.props.Age} <br />
          <span style={myStyle}>Gender: Homme</span>
          {this.props.Gender}
          <br />
          <span style={myStyle}>Bio: Football, Music, Travel</span>
        </div>
      </div>
    );
  }
}

export default Bio;