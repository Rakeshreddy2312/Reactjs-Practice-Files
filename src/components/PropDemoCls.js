import React, { Component } from "react";

class PropDemoCls extends Component {
  constructor() {
    super();
    //console.log(this.props && this.props);
    this.state = {
      users: this.props && this.props,
    };
  }
  addUser = () => {
    console.log(this.state && this.state);
  };

  render() {
    return (
      <div>
        <h3>this is props demo class component</h3>
        <table className="border border-5 ">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>MAIL ID</th>
              <th>DOB</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userlist.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.mail}</td>
                <td>{item.dob}</td>
                <td>{item.add + item.pincode}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={this.addUser}>click to add</button>
      </div>
    );
  }
}

export default PropDemoCls;
