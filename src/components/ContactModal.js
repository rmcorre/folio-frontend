import ReactDOM from 'react-dom';

import Modal from '../components/UI/Modal/Modal';
import ButtonGroup from './UI/Form/ButtonGroup';
import InputRadioButton from './UI/Form/InputRadioButton';
import InputGroup from './UI/Form/InputGroup';
import Input from './UI/Form/Input';
import TextArea from './UI/Form/TextArea';

const Content = () => {
  return (
    <Modal id="modal-contact">
      <form className="modal-body needs-validation py-4" noValidate>
        <ButtonGroup>
          <InputRadioButton
            label={'Front End'}
            name={'services'}
            id={'frontEnd'}
            htmlFor={'frontEnd'}
          />
          <InputRadioButton
            label={'Back End'}
            name={'services'}
            id={'backEnd'}
            htmlFor={'backEnd'}
          />
          <InputRadioButton
            label={'Feature'}
            name={'services'}
            id={'feature'}
            htmlFor={'feature'}
          />
        </ButtonGroup>
        <InputGroup>
          <Input type="text" placeholder="Name" required={true} />
        </InputGroup>
        <InputGroup>
          <Input type="email" placeholder="Email" required={true} />
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
        <Content />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ContactModal;
