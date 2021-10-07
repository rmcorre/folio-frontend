import PropTypes from 'prop-types';

const InputRadioButton = (props) => {
  return (
    <div className="me-2 mb-2">
      <input
        className="btn-check"
        type="radio"
        name={props.name}
        id={props.id}
      />
      <label className="btn btn-outline-primary" htmlFor={props.htmlFor}>
        {props.label}
      </label>
    </div>
  );
};

InputRadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default InputRadioButton;
