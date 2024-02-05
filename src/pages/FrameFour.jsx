import { useSelector } from "react-redux";
import Barcode from "../components/Barcode";
import Button from "../components/Button";
import PopUpTwo from "./PopUpTwo";
import { useState } from "react";

const FrameFour = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const openPopUp = () => {
    setIsOpenPopUp(true);
  };
  const closePopUp = () => {
    setIsOpenPopUp(false);
  };

  const questions = useSelector((state) => state.questions);
  let q = questions.filter((question) => typeof question === "string");

  return (
    <div className="frame_four_container">
      <h2>YOUR QUESTIONS</h2>
      <div className="collected_questions_container">
        {q.map((question, index) => {
          return (
            <h3 key={index}>
              {index + 1}) {question}
            </h3>
          );
        })}
      </div>
      <Button text="generate a link" onClick={openPopUp} />
      <Barcode />

      {isOpenPopUp && <PopUpTwo closePopUp={closePopUp} />}
    </div>
  );
};

export default FrameFour;
