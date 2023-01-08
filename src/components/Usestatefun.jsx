import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from "./Section";

const Usestatefun = () => {
  const [state, setstate] = useState([]);
  //console.log(state);
  const datacall = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setstate(result.data);
        //console.log(result);
      })
      .catch((error) => {
        console.log("error is ", error);
      });
  };
  useEffect(() => {
    datacall();
  }, []);

  return (
    <div>
      Usestatefun
      <Section state={state} />
    </div>
  );
};

export default Usestatefun;
