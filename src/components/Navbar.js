import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav classNameName="navbar bg-secondary text-light">
          <div classNameName="logo">
            <h2>
              RR<sub>clicks</sub>
            </h2>
          </div>
          <div classNameName="nav-links">
            <ul type="none">
              <li classNameName="list-links">home</li>
              <li classNameName="list-links">about</li>
              <li classNameName="list-links">services</li>
              <li classNameName="list-links">help</li>
              <li classNameName="list-links">feedback</li>
              <li>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    Enable Dark Mode
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
