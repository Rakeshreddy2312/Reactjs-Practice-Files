import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Footer from "./Footer";
import FormValidationTwo from "../components/FormValidationTwo";
import App from "../App";

const App2 = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contactus" element={<FormValidationTwo />} />
        <Route path="/Services" element={<App />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App2;
