import React from "react";
import { useState, useEffect } from "react";
const FormValidationOne = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const getData = (event) => {
    event.preventDefault();
    if (validateFrom()) {
      setFormData({ username: "", email: "", password: "" });
      console.log(formData);
    }
  };
  const validateFrom = () => {
    let isLogin = true;
    let formErrors = {};
    if (!formData.username) {
      formErrors.username = "username required";
      isLogin = false;
    }
    if (!formData.email) {
      formErrors.email = "email required";
      isLogin = false;
    }
    if (!formData.password) {
      formErrors.password = "password required";
      isLogin = false;
    }
    setErrors(formErrors);
    return isLogin;
  };
  useEffect(() => {
    console.log(errors);
  }, [formData, errors]);

  const hideError = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const checkError = (e) => {
    if (!e.target.value) {
      setErrors({ ...errors, [e.target.name]: e.target.name + " required" });
    }
  };
  return (
    <div className="container w-50 border border-3  mt-5 rounded ">
      <h2 className="text-center">Register Here</h2>
      <form className="form" onSubmit={getData}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg: Rakesh Reddy"
            value={formData.username}
            name="username"
            onFocus={hideError}
            onBlur={checkError}
            onChange={(event) => {
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              });
            }}
          />
          {errors.username && <p className="text-danger">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="eg: rakesh@gmail.com"
            value={formData.email}
            name="email"
            onFocus={hideError}
            onBlur={checkError}
            onChange={(event) => {
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              });
            }}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="*****"
            value={formData.password}
            name="password"
            onFocus={hideError}
            onBlur={checkError}
            onChange={(event) => {
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              });
            }}
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
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
export default FormValidationOne;
