import ReactDOM from 'react-dom';

import InputGroup from './UI/Form/InputGroup';
import Input from './UI/Form/Input';
import TextArea from './UI/Form/TextArea';

const Modal = (props) => {
  return (
    <div className="modal fade" id="modal-contact" tabIndex="-1">
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
          <form className="modal-body needs-validation py-4" noValidate>
            <div className="btn-group mb-3">
              <div className="me-2 mb-2">
                <input
                  className="btn-check"
                  type="radio"
                  name="services"
                  id="frontEnd"
                  autoComplete="off"
                  readOnly
                />
                <label className="btn btn-outline-primary" htmlFor="frontEnd">
                  Front End
                </label>
              </div>
              <div className="me-2 mb-2">
                <input
                  className="btn-check"
                  type="radio"
                  name="services"
                  id="backEnd"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="backEnd">
                  Back End
                </label>
              </div>
              <div className="me-2 mb-2">
                <input
                  className="btn-check"
                  type="radio"
                  name="services"
                  id="feature"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="feature">
                  Feature
                </label>
              </div>
            </div>
            <InputGroup>
              <Input type="text" placeholder="Name" required="true" />
            </InputGroup>
            <InputGroup>
              <Input type="email" placeholder="Email" required="true" />
            </InputGroup>
            <TextArea placeholder="ProjectDescription" />
            <div className="row py-2">
              <div className="col-lg-6 col-md-8">
                <button className="btn btn-primary d-block w-100" type="submit">
                  Send Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactModal = () => {
  return (
    <>
      {ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'))}
    </>
  );
};

export default ContactModal;
