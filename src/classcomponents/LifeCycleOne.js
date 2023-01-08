import React, { Component } from "react";
import image from "../images/giphy.gif";
import "./LifeCycleOne.css";
class LifeCycleOne extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      data: [],
      message: "",
      loader: false,
      title: "welcome",
    };
  }
  static getDerivedStateFromProps() {
    // console.log("getDerivedStateFromProp is calling....");

    return true;
  }
  componentDidMount() {
    //console.log("componentdidmount calling");
    this.setState({
      counter: this.state.counter + 1,
    });
    let obj = new XMLHttpRequest();
    obj.open("GET", "https://fakestoreapi.com/products", true);
    obj.send();
    obj.onreadystatechange = () => {
      //console.log("status", obj.status, "readystate", obj.readyState);
      if (obj.status === 200 && obj.readyState === 4) {
        this.setState({
          ...this.state,
          data: JSON.parse(obj.responseText),
          loader: false,
        });
        document.title = "flipkart.com";
      }
      if (obj.status === 404) {
        this.setState({ ...this.state, message: "something went wrong..." });
      }
    };
  }
  render() {
    console.log(this.height);
    console.log(this.state.data);
    return (
      <>
        {this.state.loader && (
          <img
            src={image}
            height={window.innerHeight}
            width={window.innerWidth}
          />
        )}

        <p>{this.state.message && this.state.message}</p>
        <div className=" block container border-2 ">
          {this.state.data &&
            this.state.data.map((item, indx) => {
              return (
                <div key={indx} className=" sub-block border border-secondary">
                  <div className="img-block">
                    <img src={item.image} height="200" width="200" />
                  </div>
                  <div className="des-block">
                    <h4>{item.id + "." + item.title}</h4>
                    <h3>Price :{item.price}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
export default LifeCycleOne;
