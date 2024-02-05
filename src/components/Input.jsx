const Input = ({ placeholder, onChange, value, type }) => {
  return (
    <input
      type={type}
      className="frame_one_input"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
