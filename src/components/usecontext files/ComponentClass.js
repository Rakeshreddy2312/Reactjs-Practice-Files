import React, { Component } from "react";
import { userContext, cityContext } from "./App1";
export default class ComponentClass extends Component {
  render() {
    return (
      <div>
        ComponentClass
        <userContext.Consumer>
          {(username) => {
            return (
              <cityContext.Consumer>
                {(city) => {
                  return (
                    <h4>
                      my name is {username}, i am from {city}
                    </h4>
                  );
                }}
              </cityContext.Consumer>
            );
          }}
        </userContext.Consumer>
      </div>
    );
  }
}
