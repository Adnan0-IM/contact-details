import React from "react";
import Heading from "./Heding";
import Avatar from "./Avatar";
import Contacts from "./Contacts";
import "./App.css";

const App = () => {
  return (
    <>
      <Heading />
      <Avatar img = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" />
      <Contacts />
    </>
  );
};

export default App;
