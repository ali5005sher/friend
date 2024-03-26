const Alert = ({ text, setAlert, bgColor, setSuccessAlert, setAlertTwo }) => {
  setTimeout(() => {
    if (setAlert) {
      setAlert(false);
    }
    if (setSuccessAlert) {
      setSuccessAlert(false);
    }
    if (setAlertTwo) {
      setAlertTwo(false);
    }
  }, 1000);
  return (
    <div
      className="alert"
      style={{ backgroundColor: bgColor, textAlign: "center" }}
    >
      {text}
    </div>
  );
};

export default Alert;
