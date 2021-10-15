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

// TODO: ADD CUSTOM HOOK FOR MODAL STATE
// TODO: ADD FORM VALIDATION
const ContactModal = (props) => {
  const [radioValue, setRadioValue] = useState('1');
  const [nameValue, setNameValue] = useState('');
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = nameValue.trim() !== '';
  let formIsValid = false;

  const nameOnChangeHandler = (e) => {
    setNameValue(e.target.value);
  };

  const nameOnBlurHandler = (e) => {
    setNameIsTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    setNameValue('');
    setNameIsTouched(false);
  };

  const inputs = [
    {
      value: nameValue,
      config: {
        label: 'Name',
        type: 'text',
        placeholder: 'Name',
      },
      onChange: nameOnChangeHandler,
      onBlur: nameOnBlurHandler,
      error: !nameIsValid && nameIsTouched,
    },
    {
      value: '',
      config: {
        label: 'Email',
        type: 'text',
        placeholder: 'Email',
      },
      style: null,
    },
    {
      value: '',
      config: {
        label: 'Project Description',
        as: 'textarea',
        placeholder: 'Project Description',
      },
      style: { height: '120px' },
    },
  ];

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
        className="mb-3 text-muted"
        controlId={input.config.label}
        label={input.config.label}
      >
        <Form.Control
          as={input.config.as}
          type={input.config.type}
          placeholder={input.config.placeholder}
          onChange={input.onChange}
          onBlur={input.onBlur}
          style={input.style}
        />
        {input.error && (
          <p className="text-danger fs-ms ps-2">
            {`Please enter a valid ${input.config.label.toLowerCase()}.`}
          </p>
        )}
      </FloatingLabel>
    </Form.Group>
  ));

  if (nameIsValid) {
    formIsValid = true;
  }

  return (
    <>
      <Modal
        show={props.modalShow}
        onHide={() => {
          props.setModalShow(false);
          setNameValue('');
          setNameIsTouched(false);
        }}
        centered
      >
        <Modal.Header className="mb-1" closeButton>
          <Modal.Title>What project are you looking for?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <Form onSubmit={formSubmissionHandler} noValidate>
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
                  disabled={!formIsValid}
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
