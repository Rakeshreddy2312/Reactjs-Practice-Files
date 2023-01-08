import React, { useState, useEffect } from "react";
import axios from "axios";

import ArrayShowfun from "./ArrayShowfun";

const ConditonalRender = () => {
  const [state, setState] = useState([]);

  const dataCalling = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        console.log("resp", resp.data);
        setState(resp.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    dataCalling();
  }, []);
  return (
    <div>
      <ArrayShowfun state={state} />
    </div>
  );
};

export default ConditonalRender;
