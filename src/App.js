import React, { useState } from "react";
import "./App.css";

import Navbar1 from "./components/Navbar1";
import Alert from "./components/Alert";
import Textarea from "./components/Textarea";
import ConditonalRender from "./components/ConditonalRender";
import Usestatefun from "./components/Usestatefun";
import LifeCycleOne from "./classcomponents/LifeCycleOne";
import LogCoordinates from "./classcomponents/LogCoordinates";
import FormValidation from "./components/FormValidation";
import FormValidationOne from "./components/FormValidationOne";
import FormValidationTwo from "./components/FormValidationTwo";
import UseReducer from "./components/UseReducer";
import UseReducer1 from "./components/UseReducer1";
import HookComponent from "./customHooks/HookComponent";

//import Footer from "./components/Footer";

//import Navbar from "./components/Navbar";

/*{
    id: 1,
    name: "Rakesh Reddy",
    mail: "rakesh234@gmail.com",
    dob: "01-01-1998",
    add: "siddipet,telangana",
    pincode: 506367,
  },
  {
    id: 2,
    name: "Rohith Reddy",
    mail: "rohith123@gmail.com",
    dob: "23-05-1997",
    add: "hyderabad,telangana",
    pincode: 500032,
  },
  {
    id: 3,
    name: "Ravi Kumar",
    mail: "ravikumar098@gmail.com",
    dob: "19-07-1999",
    add: "nalgonda,telangana",
    pincode: 533369,
  },
  {
    id: 4,
    name: "Maruthi Reddy",
    mail: "nimmamaruthi@gmail.com",
    dob: "14-02-1996",
    add: "hyderabad,telangana",
    pincode: 500045,
  },
  {
    id: 5,
    name: "Susruth Rao",
    mail: "dsusruth@gmail.com",
    dob: "23-05-2000",
    add: "nalgonda,telangana",
    pincode: 504260,
  },
  {
    id: 6,
    name: "Umesh Reddy",
    mail: "umesh1122@gmail.com",
    dob: "11-11-1998",
    add: "rangareddy,telangana",
    pincode: 516031,
  },
  {
    id: 7,
    name: "Prem chandh",
    mail: "prem1501@gmail.com",
    dob: "12-1-1998",
    add: "vijayawada,andrapradesh",
    pincode: 521151,
  },
  {
    id: 8,
    name: "Amarnath Reddy",
    mail: "amar420@gmail.com",
    dob: "22-1-1999",
    add: "nellore,andrapradesh",
    pincode: 524343,
  },
]; */
const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState();
  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      message: msg,
    });
    setTimeout(() => {
      setAlert();
    }, 3000);
  };

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.cssText = "background-color:#042743;";
      showAlert("success", "Dark Mode  has been Enabled");
      document.title = "Textutilities-DarkMode";
    } else {
      setMode("light");
      showAlert("success", "Light Mode  has been Enabled");
      document.body.style.backgroundColor = "white";
      document.title = "react App-HOME";
    }
  };

  return (
    <div>
      {/* <UseReducer /> */}
      {/* <FormValidationTwo /> */}
      {/* <FormValidationOne /> */}
      <Navbar1 changeMode={changeMode} mode={mode} />
      <Alert alert={alert} />
      <Textarea mode={mode} showAlert={showAlert} />
      {/* <UseReducer1 />
      <HookComponent />
      <LogCoordinates />
      <LifeCycleOne />

      {/* <Footer /> 
      <ConditonalRender />
      <hr />
      <Usestatefun /> */}
    </div>
  );
};

export default App;
