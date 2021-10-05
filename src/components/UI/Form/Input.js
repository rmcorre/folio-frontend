const Input = (props) => {
  return (
    <input
      className="form-control rounded"
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
};

export default Input;
