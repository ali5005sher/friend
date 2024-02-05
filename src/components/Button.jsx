import { NavLink } from "react-router-dom";

const Button = ({ text, onClick }) => {
  return (
    <button className="frame_one_button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
