import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

// const inputs = [
//   {
//     className: 'mb-3 text-muted',
//     controlId: 'floatingInput',
//     label: 'Name',
//     type: 'text',
//     placeholder: 'Name',
//     onchange: nameHandler,
//     style: null,
//   },
//   {
//     className: 'mb-3 text-muted',
//     controlId: 'floatingInput',
//     label: 'Email',
//     type: 'text',
//     placeholder: 'Email',
//     style: null,
//   },
//   {
//     className: 'mb-3 text-muted',
//     controlId: 'floatingTextArea',
//     label: 'Project Description',
//     as: 'textarea',
//     placeholder: 'Project Description',
//     style: { height: '120px' },
//   },
// ];

// TODO: ADD CUSTOM HOOK FOR MODAL STATE
// TODO: ADD FORM VALIDATION
const ContactModal = (props) => {
  const [radioValue, setRadioValue] = useState('1');
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const nameHandler = (e) => {
    setNameValue(e.target.value);
  };

  const emailHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescriptionValue(e.target.value);
  };

  const inputs = [
    {
      className: 'mb-3 text-muted',
      controlId: 'floatingInput',
      label: 'Name',
      type: 'text',
      placeholder: 'Name',
      value: nameValue,
      onChange: nameHandler,
      style: null,
    },
    {
      className: 'mb-3 text-muted',
      controlId: 'floatingInput',
      label: 'Email',
      type: 'text',
      placeholder: 'Email',
      value: emailValue,
      onChange: emailHandler,
      style: null,
    },
    {
      className: 'mb-3 text-muted',
      controlId: 'floatingTextArea',
      label: 'Project Description',
      as: 'textarea',
      placeholder: 'Project Description',
      value: descriptionValue,
      onChange: descriptionHandler,
      style: { height: '120px' },
    },
  ];

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (nameValue.trim() === '') {
      return;
    }

    if (emailValue.trim() === '') {
      return;
    }

    if (descriptionValue.trim() === '') {
      return;
    }

    setNameValue('');
    setEmailValue('');
    setDescriptionValue('');
  };

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
          onChange={input.onChange}
          style={input.style}
        />
      </FloatingLabel>
    </Form.Group>
  ));

  return (
    <>
      <Modal
        show={props.modalShow}
        onHide={() => {
          props.setModalShow(false);
        }}
        centered
      >
        <Modal.Header
          className="mb-1"
          onClick={() => {
            props.setModalShow(false);
          }}
          closeButton
        >
          <Modal.Title>What project are you looking for?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <Form onSubmit={formSubmissionHandler}>
            <ButtonGroup className="mb-3">{togglesList}</ButtonGroup>
            {inputsList}
            <div className="row py-2">
              <div className="col-lg-6 col-md-8">
                <Button
                  className="d-block w-100"
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    props.setModalShow(false);
                  }}
                >
                  Send Request
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactModal;
