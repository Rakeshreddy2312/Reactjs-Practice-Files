import React, { useReducer } from "react";

const UseReducer1 = () => {
  const initialState = 0;
  const reducerFun = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  };
  const [counter, dispatch] = useReducer(reducerFun, initialState);
  return (
    <div>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        increment
      </button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset
      </button>
    </div>
  );
};

export default UseReducer1;
