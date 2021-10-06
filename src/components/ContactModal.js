import ReactDOM from 'react-dom';

import Modal from '../components/UI/Modal/Modal';
import InputGroup from './UI/Form/InputGroup';
import Input from './UI/Form/Input';
import TextArea from './UI/Form/TextArea';

const ModalConfig = () => {
  return (
    <Modal id="modal-contact">
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
    </Modal>
  );
};

const ContactModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalConfig />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ContactModal;
