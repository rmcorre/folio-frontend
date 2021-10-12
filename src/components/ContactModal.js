import { useState } from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ButtonSubmit from './UI/Form/ButtomSubmit';

const toggles = [
  {
    name: 'Front End',
    value: '1',
  },
  {
    name: 'Back End',
    value: '2',
  },
  {
    name: 'Feature',
    value: '3',
  },
];

const inputs = [
  {
    className: 'mb-3 text-muted',
    controlId: 'floatingInput',
    label: 'Name',
    type: 'text',
    placeholder: 'Name',
    style: null,
  },
  {
    className: 'mb-3 text-muted',
    controlId: 'floatingInput',
    label: 'Email',
    type: 'text',
    placeholder: 'Email',
    style: null,
  },
  {
    className: 'mb-3 text-muted',
    controlId: 'floatingTextArea',
    label: 'Project Description',
    as: 'textarea',
    placeholder: 'Project Description',
    style: { height: '120px' },
  },
];

// TODO: ADD CUSTOM HOOK FOR MODAL STATE
// TODO: ADD FORM VALIDATION
const Content = (props) => {
  const [radioValue, setRadioValue] = useState('1');

  const togglesList = toggles.map((toggle, idx) => (
    <div key={idx} className="me-2 mb-2">
      <ToggleButton
        variant="outline-primary"
        id={`radio-${idx}`}
        type="radio"
        name="services"
        value={toggle.value}
        checked={radioValue === toggle.value}
        onChange={(e) => setRadioValue(e.currentTarget.value)}
      >
        {toggle.name}
      </ToggleButton>
    </div>
  ));

  const inputsList = inputs.map((input, idx) => (
    <Form.Group key={idx}>
      <FloatingLabel
        className={input.className}
        controlId={input.controlId}
        label={input.label}
      >
        <Form.Control
          as={input.as}
          type={input.type}
          placeholder={input.placeholder}
          style={input.style}
        />
      </FloatingLabel>
    </Form.Group>
  ));

  return (
    <>
      <Modal show={props.modalShow} centered>
        <Modal.Header className="mb-1" closeButton>
          <Modal.Title>What project are you looking for?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <Form>
            <ButtonGroup className="mb-3">{togglesList}</ButtonGroup>
            {inputsList}
            <div className="row py-2">
              <div className="col-lg-6 col-md-8">
                <ButtonSubmit text={'Send Request'} />
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

const ContactModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Content
          modalShow={props.modalShow}
          setModalShow={props.setModalShow}
        />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ContactModal;
