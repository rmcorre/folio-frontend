import PropTypes from 'prop-types';

const ButtonSubmit = (props) => {
  return (
    <button className="btn btn-primary d-block w-100" type="submit">
      {props.text}
    </button>
  );
};

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonSubmit;
