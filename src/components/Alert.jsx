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
    <div className="alert" style={{ backgroundColor: bgColor }}>
      {text}
    </div>
  );
};

export default Alert;
