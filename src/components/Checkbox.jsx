const Checkbox = ({ label, onChange, checked }) => {
  return (
    <div className="checkbox_component_contianer">
      <input
        type="checkbox"
        className="checkbox"
        label={label}
        onChange={onChange}
        checked={checked}
      />
      {label}
    </div>
  );
};

export default Checkbox;
