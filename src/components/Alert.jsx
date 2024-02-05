const Alert = ({ text, setAlert, bgColor, setSuccessAlert, setAlertTwo }) => {
  setTimeout(() => {
    setAlert(false);
    setSuccessAlert(false);
    setAlertTwo(false);
  }, 1000);
  return (
    <div className="alert" style={{ backgroundColor: bgColor }}>
      {text}
    </div>
  );
};

export default Alert;
