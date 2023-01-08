import axios from "axios";
import React from "react";
import { useState } from "react";

const FormValidationTwo = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",

    hobbies: {
      reading: false,
      eating: false,
      playing: false,
      singing: false,
    },
    gender: "",
    state: "",
    add: "",
  });
  const [formError, setFormErrors] = useState({});
  const [successmsg, setSuccessMsg] = useState();
  const [errormsg, setErrorMsg] = useState();
  const checkHobbies = (e) => {
    setFormData({
      ...formData,
      hobbies: { ...formData.hobbies, [e.target.value]: e.target.checked },
    });
  };
  const checkGender = (e) => {
    //console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //****************get form data and post **********/
  const getFormData = async (e) => {
    e.preventDefault();
    let formTarget = e.target;

    if (validateForm()) {
      await axios
        .post("https://reqres.in/api/articles", formData)
        .then((res) => {
          if (res.status === 201) {
            console.log(res);
            setSuccessMsg("Accout created succesfully");
            setTimeout(() => {
              setSuccessMsg("");
            }, 5000);
          }
        })
        .catch((err) => {
          setErrorMsg("sorry! unable to create account");
          setTimeout(() => {
            setErrorMsg("");
          }, 5000);
          console.log(err);
        });
      setFormData({
        fullname: "",
        username: "",
        email: "",
        password: "",

        hobbies: {
          reading: false,
          eating: false,
          playing: false,
          singing: false,
        },
        gender: "",
        state: "",
        add: "",
      });
    }
    formTarget.reset();
  };
  //-----------  validate from data--------------//
  const validateForm = () => {
    let isLogin = true;
    let error = {};
    if (!formData.fullname) {
      isLogin = false;
      error.fullname = "Mandatory to Fill";
    }
    if (!formData.username) {
      isLogin = false;
      error.username = "username is required";
    }
    if (!formData.email) {
      isLogin = false;
      error.email = "email is required";
    }
    if (!formData.password) {
      isLogin = false;
      error.password = "password is required";
    }

    if (!formData.gender) {
      isLogin = false;
      error.gender = "select your gender type";
    }
    if (!formData.state) {
      isLogin = false;
      error.state = "select your state";
    }
    if (!formData.add) {
      isLogin = false;
      error.add = "Enter your Address";
    }
    setFormErrors({ ...error });
    return isLogin;
  };
  const hideError = (e) => {
    setFormErrors({ ...formError, [e.target.name]: "" });
  };
  const checkError = (e) => {
    if (e.target.value === "") {
      setFormErrors({
        ...formError,
        [e.target.name]: e.target.name + " is required",
      });
    }
    //console.log(e.target.value);
    //console.log(formError);
  };
  //console.log(formData);
  return (
    <div className="container ">
      <h1 className="text-center display-5 text-success">Register Form</h1>
      {successmsg && <h4 className="text-success">{successmsg}</h4>}
      {errormsg && <h4 className="text-danger">{errormsg}</h4>}
      <form
        className="border border-secondary p-3 my-4 rounded"
        onSubmit={getFormData}
      >
        <div className="form-group my-2">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="fullname"
            className={`form-control `}
            name="fullname"
            value={formData.fullname}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            onFocus={hideError}
            onBlur={checkError}
          />
          {formError.fullname && (
            <p className="text-danger">{formError.fullname}</p>
          )}
        </div>
        <div className="form-group my-2">
          <label htmlFor="username"> UserName</label>
          <input
            type="text"
            id="username"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            onFocus={hideError}
            onBlur={checkError}
          />
          {formError.username && (
            <p className="text-danger">{formError.username}</p>
          )}
        </div>
        <div className="form-group my-2">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            onFocus={hideError}
            onBlur={checkError}
          />
          {formError.email && <p className="text-danger">{formError.email}</p>}
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            onFocus={hideError}
            onBlur={checkError}
          />
          {formError.password && (
            <p className="text-danger">{formError.password}</p>
          )}
        </div>
        <div className="form-group my-2">
          <label>Hobbies :&nbsp; </label>
          <input
            type="checkbox"
            name="hobbies"
            onChange={checkHobbies}
            value="reading"
            id="reading"
          />
          <label htmlFor="reading"> Reading</label>&nbsp;&nbsp;
          <input
            type="checkbox"
            name="hobbies"
            value="playing"
            id="playing"
            onChange={checkHobbies}
          />
          <label htmlFor="playing">Playing</label>&nbsp;&nbsp;
          <input
            type="checkbox"
            name="hobbies"
            onChange={checkHobbies}
            value="singing"
            id="singing"
          />
          <label htmlFor="singing">Singing</label>&nbsp;&nbsp;
          <input
            type="checkbox"
            name="hobbies"
            onChange={checkHobbies}
            value="eating"
            id="eating"
          />
          <label htmlFor="eating">Eating</label>
        </div>
        <div className="form-group my-2">
          <label>Gender : &nbsp;</label>
          <input
            className="ms-3"
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={checkGender}
            onFocus={hideError}
            onBlur={checkError}
          />
          <label htmlFor="male">Male</label>
          <input
            className="ms-2"
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={checkGender}
            onFocus={hideError}
            onBlur={checkError}
          />
          <label htmlFor="female">Female</label>
          <input
            className="ms-2"
            type="radio"
            name="gender"
            value="other"
            id="other"
            onChange={checkGender}
            onFocus={hideError}
          />
          <label htmlFor="other">Other</label>
          {formError.gender && (
            <p className="text-danger">{formError.gender}</p>
          )}
        </div>
        <div className="form-group d-flex my-2">
          <label>State : </label>
          <select
            className="form-control w-50 ms-2"
            onChange={(e) => {
              setFormData({ ...formData, state: e.target.value });
            }}
            onFocus={hideError}
            onBlur={checkError}
          >
            <option>--------select state------</option>
            <option>Telangana</option>
            <option>AndraPradesh</option>
            <option>Kerala</option>
            <option>Delhi</option>
          </select>
          {formError.state && <p className="text-danger">{formError.state}</p>}
        </div>
        <label htmlFor="address">Address</label>
        <div className="from-group">
          <textarea
            rows="4"
            cols="50"
            name="add"
            id="address"
            value={formData.add}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            onFocus={hideError}
            onBlur={checkError}
          ></textarea>
          {formError.add && <p className="text-danger">{formError.add}</p>}
        </div>
        <div className="form-group my-2">
          <input
            type="submit"
            className="form-control  btn btn-success"
            value="Register"
          />
        </div>
      </form>
    </div>
  );
};

export default FormValidationTwo;
