import React, { useState } from "react";

const StateDemo = () => {
  const [counter, setCounter] = useState(0);

  const counterIncriment = () => {
    setCounter(counter + 5);
  };
  console.log(counter);
  return (
    <>
      <div>counter-{counter}</div>
      <button onClick={counterIncriment}>click to increse counter</button>
    </>
  );
};

export default StateDemo;
