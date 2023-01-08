import React from "react";
import { useState } from "react";
const FormValidation = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  /* const getUsername = (event) => {
    setUsername(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
    const getPassword = (event) => {
      setPassword(event.target.value);
    }; */
  const getData = (event) => {
    event.preventDefault();
    console.log("Username", Username, "Email ", Email, "password", Password);
  };
  return (
    <div className="container w-50">
      <form className="form" onSubmit={getData}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg: Rakesh Reddy"
            value={Username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="eg: rakesh@gmail.com"
            value={Email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="*****"
            value={Password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value={"Register"}
            className=" w-50 m-auto my-3 btn btn-outline-primary btn-sm"
          />
        </div>
      </form>
    </div>
  );
};
export default FormValidation;
