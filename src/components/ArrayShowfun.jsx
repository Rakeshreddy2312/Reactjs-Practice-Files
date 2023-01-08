import React from "react";

const ArrayShowfun = ({ state }) => {
  console.log(state && state[0] && state[0].name);
  return <div>{state && state[0] && state[0].name} </div>;
};
export default ArrayShowfun;
