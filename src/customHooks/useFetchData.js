import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  }, [url]);
  return [data, errorMsg];
};

export default useFetchData;
