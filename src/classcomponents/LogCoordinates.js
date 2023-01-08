import React, { Component } from "react";

class LogCoordinates extends Component {
  constructor() {
    // console.log("callinf constructor");
    super();
    this.state = {
      x_axis: 0,
      y_axis: 0,
    };
  }

  componentDidMount() {
    document.getElementById("block").addEventListener("mousemove", (event) => {
      this.setState({
        x_axis: event.clientX,
        y_axis: event.clientY,
      });
      document.getElementById("block").addEventListener("mouseout", (event) => {
        this.setState({
          x_axis: 0,
          y_axis: 0,
        });
      });
    });
  }
  render() {
    return (
      <div
        id="block"
        style={{
          height: "200px",
          border: "10px solid red",
          margin: "0px",
          borderRadius: "50px",
        }}
      >
        <h3>X-axis :{this.state.x_axis}</h3>
        <h3>y-axis :{this.state.y_axis}</h3>
      </div>
    );
  }
}
export default LogCoordinates;
