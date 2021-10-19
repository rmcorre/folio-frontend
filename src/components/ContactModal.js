import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const toggles = [
  {
    id: 1,
    text: 'Front End',
    type: 'radio',
    name: 'services',
    value: '1',
  },
  {
    id: 2,
    text: 'Back End',
    type: 'radio',
    name: 'services',
    value: '2',
  },
  {
    id: 3,
    text: 'Feature',
    type: 'radio',
    name: 'services',
    value: '3',
  },
];

const inputs = [
  {
    id: 1,
    label: 'Name',
    type: 'text',
    placeholder: 'Name',
    value: '',
    style: {},
  },
  {
    id: 2,
    label: 'Email',
    type: 'text',
    placeholder: 'Email',
    value: '',
    style: {},
  },
  {
    id: 3,
    label: 'Project Description',
    as: 'textarea',
    placeholder: 'Project Description',
    value: '',
    style: { height: '120px' },
  },
];

// TODO: ADD CUSTOM HOOK FOR MODAL STATE
// TODO: ADD FORM VALIDATION
const ContactModal = (props) => {
  const [radioValue, setRadioValue] = useState('1');
  const [nameValue, setNameValue] = useState('');
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [validated, setValidated] = useState(false);

  const nameIsValid = nameValue.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;
  // let formIsValid = false;

  const nameOnChangeHandler = (e) => {
    setNameValue(e.target.value);
  };

  const nameOnBlurHandler = (e) => {
    setNameIsTouched(true);
  };

  const formSubmissionHandler = (e) => {
    const form = e.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    // if (!formIsValid) return;
    setValidated(true);

    setNameValue('');
    setNameIsTouched(false);
  };

  const togglesList = toggles.map((toggle) => (
    <div key={toggle.id} className="me-2 mb-2">
      <ToggleButton
        variant="outline-primary"
        id={`toggle-${toggle.id}`}
        type={toggle.type}
        name={toggle.name}
        value={toggle.value}
        onChange={(e) => setRadioValue(e.currentTarget.value)}
        checked={radioValue === toggle.value}
      >
        {toggle.text}
      </ToggleButton>
    </div>
  ));

  const inputsList = inputs.map((input) => (
    <Form.Group key={input.id}>
      <FloatingLabel
        className="mb-3 text-muted"
        controlId={input.label}
        label={input.label}
      >
        <Form.Control
          as={input.as}
          type={input.type}
          placeholder={input.placeholder}
          onChange={nameOnChangeHandler}
          onBlur={nameOnBlurHandler}
          style={input.style}
          isvalid={nameInputIsInvalid.toString()}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid {input.label}.
        </Form.Control.Feedback>
        {/* {nameInputIsInvalid && (
          <p className="text-danger fs-ms ps-2">
            {`Please enter a valid ${input.label.toLowerCase()}.`}
          </p>
        )} */}
      </FloatingLabel>
    </Form.Group>
  ));

  // if (nameIsValid) {
  //   setValidated(true);
  // }

  return (
    <>
      <Modal
        show={props.modalShow}
        onHide={() => {
          props.setModalShow(false);
          setNameValue('');
          setNameIsTouched(false);
          setValidated(false);
        }}
        centered
      >
        <Modal.Header className="mb-1" closeButton>
          <Modal.Title>What project are you looking for?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <Form
            validated={validated}
            onSubmit={formSubmissionHandler}
            noValidate
          >
            <ButtonGroup className="mb-3">{togglesList}</ButtonGroup>
            {inputsList}
            <div className="row py-2">
              <div className="col-lg-6 col-md-8">
                <Button
                  className="d-block w-100"
                  variant="primary"
                  type="submit"
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
