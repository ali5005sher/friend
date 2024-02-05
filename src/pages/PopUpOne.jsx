import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Barcode from "../components/Barcode";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../services/redux/slices/questionSlice";
import Alert from "../components/Alert";

const PopUpOne = ({ closePopUp, setPath }) => {
  const Q = useSelector((state) => state.questions);
  const [questions, setQuestions] = useState(Q);
  const [question, setQuestion] = useState("");
  const [Alertt, setAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const dispatch = useDispatch();

  const onChangeHandler = () => {
    console.log(question);
    if (Q.includes(question)) {
      setAlert(true);
      console.log(question);
      // alert("question already added");
    } else if (question.trim() === "") {
      console.log("enter something");
    } else {
      setQuestions(question);
      setSuccessAlert(true);
      setPath("/f4");
    }
    setQuestion("");
  };
  useEffect(() => {
    // console.log(questions);
    dispatch(addQuestion(questions));
  }, [questions]);

  const handleQuestions = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <div className="popup_one_container">
      {Alertt && (
        <Alert
          text="Question Already added"
          setAlert={setAlert}
          bgColor="red"
        />
      )}
      {successAlert && (
        <Alert
          text="Question added"
          setSuccessAlert={setSuccessAlert}
          bgColor="green"
          setAlert={setAlert}
        />
      )}
      <h1>HELLO WORLD</h1>
      <div className="popup_one_content">
        <Input
          placeholder="write your question"
          onChange={handleQuestions}
          value={question}
          type="text"
        />
        <span className="add" onClick={onChangeHandler}>
          +
        </span>
      </div>
      <Button text="close" onClick={closePopUp} />
      <Barcode />
    </div>
  );
};

export default PopUpOne;
