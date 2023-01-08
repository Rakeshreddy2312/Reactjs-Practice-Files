import React, { useReducer, useState } from "react";

let initialstate = 0;
const reducerFun = (state, action) => {
  switch (action) {
    case "increment":
      return (state = state + 5);
    case "decrement":
      return (state = state - 1);
    case "reset":
      return (state = 0);
    default:
      return state;
  }
};
const UseReducer = () => {
  const [counter, dispatch] = useReducer(reducerFun, initialstate);
  return (
    <>
      <div className="container d-flex my-5">
        <button
          onClick={() => {
            dispatch("increment");
          }}
        >
          increment
        </button>
        <p className="mx-4">{counter}</p>
        <button
          onClick={() => {
            dispatch("decrement");
          }}
        >
          decrement
        </button>
        <br></br>
        <button
          onClick={() => {
            dispatch("reset");
          }}
        >
          reset
        </button>
      </div>
    </>
  );
};
export default UseReducer;
