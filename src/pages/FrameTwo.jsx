import React, { useState } from "react";
import PlainButton from "../components/PlainButton";
import Input from "../components/Input";
import Button from "../components/Button";
import Barcode from "../components/Barcode";
import Checkbox from "../components/Checkbox";
import { NavLink } from "react-router-dom";
import Alert from "../components/Alert";

const FrameTwo = () => {
  const [path, setPath] = useState("");
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [nickName, setNickName] = useState("");
  const [Alertt, setAlert] = useState(false);

  const handleMale = () => {
    setFemale(false);
    setMale(true);
    if (handleMoveToNextPage && !male && !nickName) {
      setPath("");
    } else {
      setPath("/f3");
    }
  };

  const handleFemale = () => {
    setMale(false);
    setFemale(true);
    if (handleMoveToNextPage && !female && !nickName) {
      setPath("");
    } else {
      setPath("/f3");
    }
  };
  const handleNickName = (e) => {
    setNickName(e.target.value);
    if (handleMoveToNextPage && !female && !male) {
      setPath("");
    } else {
      setPath("/f3");
    }
  };

  const handleMoveToNextPage = () => {
    if (nickName.trim() === "" || (male && female)) {
      // alert("Please enter both name and age before moving to the next page.");
      setAlert(true);
    }
  };
  return (
    <div className="frame_two_container">
      {Alertt && (
        <Alert
          bgColor="red"
          setAlert={setAlert}
          text="Please Fill Credentials"
        />
      )}
      <h1 className="frame_two_heading">
        HELLO <br /> WORLD
      </h1>
      <div className="frame_two_content">
        <Input
          placeholder="enter your nickname"
          onChange={handleNickName}
          type="text"
        />
        <PlainButton />
        <div className="check_box_container">
          <Checkbox label="male" onChange={handleMale} checked={male} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Checkbox label="female" onChange={handleFemale} checked={female} />
        </div>
        <NavLink to={path}>
          <Button text="move to next page" onClick={handleMoveToNextPage} />
        </NavLink>
        <NavLink to="/">
          <Button text="go back" />
        </NavLink>
      </div>
      <Barcode />
    </div>
  );
};

export default FrameTwo;
