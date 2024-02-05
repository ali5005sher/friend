import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Barcode from "../components/Barcode";
import { NavLink } from "react-router-dom";
import Alert from "../components/Alert";

const FrameOne = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [path, setPath] = useState("");
  const [Alertt, setAlert] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    if (handleMoveToNextPage && !age) {
      setPath("/");
    } else {
      setPath("/f2");
    }
  };

  const handleAge = (e) => {
    setAge(e.target.value);
    if (handleMoveToNextPage && !name) {
      setPath("/");
    } else {
      setPath("/f2");
    }
  };

  const handleMoveToNextPage = () => {
    if (name.trim() === "" || age.trim() === "") {
      // alert("Please enter both name and age before moving to the next page.");
      setAlert(true);
    }
  };

  return (
    <div className="frame_one_container">
      {Alertt && (
        <Alert
          text="Please Enter Both Name and Age"
          setAlert={setAlert}
          bgColor="red"
        />
      )}
      <h1 className="frame_one_heading">
        HELLO <br /> WORLD
      </h1>
      <div className="frame_one_content">
        <Input
          placeholder="enter your name"
          onChange={handleName}
          type="text"
        />
        <Input
          placeholder="enter your Age"
          onChange={handleAge}
          type="number"
        />

        <NavLink to={path}>
          <Button text="move to next page" onClick={handleMoveToNextPage} />
        </NavLink>

        <Button text="want to login" />
      </div>
      <Barcode />
    </div>
  );
};

export default FrameOne;
