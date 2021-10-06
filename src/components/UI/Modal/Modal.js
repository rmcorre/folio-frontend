import PropTypes from 'prop-types';

const Modal = (props) => {
  return (
    <div className="modal fade" id={props.id} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header mb-1">
            <h4 className="modal-title">What project are you looking for?</h4>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {props.children}

          {/* Children can be the following */}

          {/* Modal Body Container Here (required for padding): 
              Can be any block level element including the form element. 
              Make sure to add the 'modal-body' class to the element */}

          {/* Modal Footer Container Here (optional):
              Can be any block level element including the form element
              Make sure to add the 'modal-footer' class to the element */}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Modal;
