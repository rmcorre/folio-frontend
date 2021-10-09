const Input = (props) => {
  return (
    <input
      className="form-control rounded"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
