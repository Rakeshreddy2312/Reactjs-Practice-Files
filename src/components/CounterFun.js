import React, { useState } from "react";

const CounterFun = () => {
  const [counter, setCounter] = useState({
    id: 1,
    name: "rakesh reddy",
    city: "hyderabad",
  });
  const incrementCounter = () => {
    setCounter({ ...counter, id: counter.id + 1 });
  };
  return (
    <>
      {console.log("output in jsx ", counter)}
      <h3>this is counter function component</h3>
      <br />
      <p>counter value is : {counter.id}</p>
      <button onClick={incrementCounter}>
        click to increase counter value
      </button>
    </>
  );
};
export default CounterFun;
