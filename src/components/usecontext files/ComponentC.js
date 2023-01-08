import React, { useContext } from "react";
import { userContext } from "./App1";

const ComponentC = () => {
  const name = useContext(userContext);
  return (
    <div>
      ComponentC
      <h5>my name is {name}</h5>
    </div>
  );
};

export default ComponentC;
