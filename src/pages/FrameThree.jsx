import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Barcode from "../components/Barcode";
import PopUpOne from "./PopUpOne";
import { NavLink } from "react-router-dom";
import questions from "../../questions.json";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../services/redux/slices/questionSlice";
import Alert from "../components/Alert";

const questionData = questions.questions;

const FrameThree = () => {
  const question = useSelector((state) => state.questions);
  let q = question.filter((ques) => typeof ques === "string");

  const [path, setPath] = useState("");
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [questions, setQuestions] = useState(question);
  const [Alertt, setAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [AlertTwo, setAlertTwo] = useState(false);
  const dispatch = useDispatch();

  const checkArray = () => {
    if (q.length <= 1) {
      setPath("/f3");
      setAlertTwo(true);
    } else {
      setPath("/f4");
    }
  };

  const openPopUp = () => {
    setIsOpenPopUp(true);
  };
  const closePopUp = () => {
    setIsOpenPopUp(false);
  };

  const handleClick = (e) => {
    if (question.includes(e.target.innerText)) {
      // alert("question already added");
      setAlert(true);
    } else {
      setQuestions(e.target.innerText);
      setSuccessAlert(true);
      setPath("/f4");
    }
  };
  useEffect(() => {
    dispatch(addQuestion(questions));
  }, [questions]);

  return (
    <div className="frame_three_container">
      {Alertt && (
        <Alert
          bgColor="red"
          text="Question Already added"
          setAlert={setAlert}
          setSuccessAlert={setSuccessAlert}
        />
      )}
      {successAlert && (
        <Alert
          bgColor="green"
          text="Question Added"
          setSuccessAlert={setSuccessAlert}
          setAlert={setAlert}
        />
      )}
      {AlertTwo && (
        <Alert
          bgColor="red"
          text="Choose some questions first"
          setAlertTwo={setAlertTwo}
          setSuccessAlert={setSuccessAlert}
          setAlert={setAlert}
        />
      )}
      <div className="frame_three_heading">
        <h2>MOST REPEATED QUESTIONS</h2>
        <p>CLICK TO CHOOSE THE QUESTIONS</p>
      </div>
      <div className="frame_three_questions">
        {questionData?.map((question, index) => {
          return (
            <h3 key={index} onClick={handleClick}>
              {question}
            </h3>
          );
        })}
      </div>
      <div style={{ textAlign: "center" }}>
        <Button text="create custom questions" onClick={openPopUp} />
        <NavLink to={path}>
          <Button text="move to next page" onClick={checkArray} />
        </NavLink>
      </div>
      <Barcode />
      {isOpenPopUp && <PopUpOne closePopUp={closePopUp} setPath={setPath} />}
    </div>
  );
};

export default FrameThree;
