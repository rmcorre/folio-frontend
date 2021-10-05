const InputGroup = (props) => {
  return (
    <div className="input-group mb-3">
      <i className="ai-user position-absolute top-50 start-0 translate-middle-y ms-3"></i>
      {props.children}
    </div>
  );
};

export default InputGroup;
