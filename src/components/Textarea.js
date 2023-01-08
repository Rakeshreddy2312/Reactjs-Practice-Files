import React, { useState } from "react";

const Textarea = (props) => {
  //console.log(props);
  const [state, setState] = useState("");
  const changeInputText = (event) => {
    //console.log(event.target.value);
    setState(event.target.value);
  };
  const chnageToUpperCase = () => {
    setState(state.toUpperCase());
    props.showAlert("success", "text changed to UPPERCASE");
  };
  const changeToLowerCase = () => {
    setState(state.toLowerCase());
    props.showAlert("success", "Text Changed to lowercase");
  };
  const chnageTocapitalize = () => {
    const cptlzdtext = state
      .split(" ")
      .map((item) => {
        return item[0].toUpperCase() + item.slice(1, item.length);
      })
      .join(" ");

    setState(cptlzdtext);
    props.showAlert("success", "text changed to Capitalize Case");
  };

  const inverCase = () => {
    const arr = state
      .split("")
      .map((item) => {
        if (item === item.toUpperCase()) {
          return item.toLowerCase();
        } else {
          return item.toUpperCase();
        }
      })
      .join("");
    setState(arr);
    props.showAlert("success", "text changed to inverse case");
  };
  const alternsteCase = () => {
    let altrarr = state
      .split("")
      .map((item, index) => {
        if (index % 2 !== 0) {
          return item.toUpperCase();
        } else {
          return item.toLowerCase();
        }
      })
      .join("");
    setState(altrarr);
    props.showAlert("success", "text changed to aLtErNaTe case");
    //console.log(altrarr);
  };
  const removeSpaces = () => {
    let remvstate = state.split(/[ ]+/).join(" ");
    setState(remvstate);
    props.showAlert("success", "Extra spaces are removed from the text");
  };
  //   const clearText = () => {
  //     setState("");
  //   };

  const intistyle = {
    backgroundColor: "white",
    color: "black",
  };
  const [buttonName, setbuttonName] = useState("Enable Dark Mode");
  const [mystyles, setmystyles] = useState(intistyle);
  const toggleMode = () => {
    if (mystyles.color === "black") {
      let darkstyles = { backgroundColor: "black", color: "white" };
      setmystyles(darkstyles);
      setbuttonName("Enbale Light Mode");
    } else {
      setmystyles(intistyle);
      setbuttonName("Enbale dark Mode");
    }
  };

  return (
    <div
      className={`container my-3 rounded-4 py-3  text-${
        props.mode === "light" ? "dark" : "light"
      }
      }`}
    >
      <label htmlFor="text">TEXTAREA</label>
      <textarea
        id="text"
        className={`form-control  border border-radius-5 `}
        style={{
          backgroundColor: props.mode === "dark" ? "#5d5d5d" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
        rows="5"
        placeholder="Enter Text Here"
        value={state}
        onChange={changeInputText}
      ></textarea>
      <div className="py-3">
        <button className="btn btn-primary m-2" onClick={chnageToUpperCase}>
          {"upper case".toUpperCase()}
        </button>
        <button className="btn btn-primary m-2" onClick={changeToLowerCase}>
          lower case
        </button>
        <button className="btn btn-primary m-2" onClick={chnageTocapitalize}>
          Capitalize Case
        </button>
        <button className="btn btn-primary m-2" onClick={inverCase}>
          inverse case
        </button>
        <button className="btn btn-primary m-2" onClick={alternsteCase}>
          aLtErNaTe case
        </button>
        <button className="btn btn-primary m-2" onClick={removeSpaces}>
          remove spaces
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            setState("");
            props.showAlert("success", "text cleared");
          }}
        >
          clear
        </button>
      </div>
      <h3>
        <span>{state.length}</span> characters and
        <span> {state.split(" ").length} </span> words
      </h3>
      <h3>preview</h3>
      <p className="">
        {state !== "" ? state : "Enter something in above textarea to Preview "}
      </p>
      {/*<button className="btn btn-primary" onClick={toggleMode}>
        {buttonName}
      </button>*/}
    </div>
  );
};

export default Textarea;
