import { useState } from 'react';
import ReactDOM from 'react-dom';

import Modal from './UI/Modal/Modal';
import ButtonGroup from './UI/Form/ButtonGroup';
import InputRadioButton from './UI/Form/InputRadioButton';
import InputGroup from './UI/Form/InputGroup';
import Input from './UI/Form/Input';
import TextArea from './UI/Form/TextArea';
import ButtonSubmit from './UI/Form/ButtomSubmit';

const Content = () => {
  const [textValue, setTextValue] = useState('');

  const textInputHandler = (event) => {
    setTextValue(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (textValue.trim() === '') {
      return;
    }

    console.log(textValue);
    setTextValue('');
  };

  return (
    <Modal id="modal-contact">
      <form className="modal-body py-4" onSubmit={formSubmissionHandler}>
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
          <Input
            type="text"
            placeholder="Name"
            onChange={textInputHandler}
            value={textValue}
          />
        </InputGroup>
        <InputGroup>
          <Input type="email" placeholder="Email" required={true} />
        </InputGroup>
        <TextArea placeholder="ProjectDescription" />
        <div className="row py-2">
          <div className="col-lg-6 col-md-8">
            <ButtonSubmit text={'Send Request'} />
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
