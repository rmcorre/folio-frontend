import { useEffect, useState } from 'react';

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

  const [emailValue, setEmailValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (nameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameIsValid]);

  const nameOnChangeHandler = (e) => {
    setNameValue(e.target.value);
  };

  const emailOnChangeHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const descriptionOnChangeHandler = (e) => {
    setDescriptionValue(e.target.value);
  };

  const nameOnBlurHandler = (e) => {
    setNameIsTouched(true);
  };

  const inputs = [
    {
      controlId: 'floatingInput',
      label: 'Name',
      type: 'text',
      placeholder: 'Name',
      value: nameValue,
      onChange: nameOnChangeHandler,
      onBlur: nameOnBlurHandler,
      style: null,
      isValid: !nameIsValid && nameIsTouched,
    },
    {
      controlId: 'floatingInput',
      label: 'Email',
      type: 'text',
      placeholder: 'Email',
      value: emailValue,
      onChange: emailOnChangeHandler,
      style: null,
    },
    {
      controlId: 'floatingTextArea',
      label: 'Project Description',
      as: 'textarea',
      placeholder: 'Project Description',
      value: descriptionValue,
      onChange: descriptionOnChangeHandler,
      style: { height: '120px' },
    },
  ];

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setNameIsTouched(true);

    if (!formIsValid) {
      return;
    }

    setFormIsValid(false);
    setNameValue('');
    setNameIsTouched(false);

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
        className="mb-3 text-muted"
        controlId={input.controlId}
        label={input.label}
      >
        <Form.Control
          as={input.as}
          type={input.type}
          placeholder={input.placeholder}
          onChange={input.onChange}
          onBlur={input.onBlur}
          style={input.style}
        />
        {input.isValid && <p>{`${input.label} must not be empty.`}</p>}
      </FloatingLabel>
    </Form.Group>
  ));

  return (
    <>
      <Modal
        show={props.modalShow}
        onHide={() => {
          props.setModalShow(false);
          setFormIsValid(false);
          setNameValue('');
          setNameIsTouched(false);
        }}
        centered
      >
        <Modal.Header
          className="mb-1"
          onHide={() => {
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
