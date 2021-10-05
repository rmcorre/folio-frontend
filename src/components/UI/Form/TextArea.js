const TextArea = (props) => {
  return (
    <div className="mb-3 pb-1">
      <textarea
        className="form-control"
        rows="4"
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
