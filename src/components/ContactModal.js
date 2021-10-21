import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const toggles = [
  {
    label: 'Front End',
    value: '1',
  },
  {
    label: 'Back End',
    value: '2',
  },
  {
    label: 'Feature',
    value: '3',
  },
];

const inputs = [
  {
    type: 'text',
    label: 'Name',
    value: '',
    style: {},
  },
  {
    type: 'email',
    label: 'Email',
    value: '',
    style: {},
  },
  {
    as: 'textarea',
    label: 'Message',
    value: '',
    style: { height: '120px' },
  },
];

const ContactModal = (props) => {
  const [targetValue, setTargetValue] = useState('1');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      props.setModalShow(false);
      formik.handleReset();
    },
  });

  const handleHide = () => {
    props.setModalShow(false);
    formik.handleReset();
  };

  const togglesList = toggles.map((toggle) => (
    <div key={toggle.value} className="me-2 mb-2">
      <ToggleButton
        variant="outline-primary"
        id={`toggle-${toggle.value}`}
        type="radio"
        name="services"
        value={toggle.value}
        checked={targetValue === toggle.value}
        onChange={(e) => setTargetValue(e.currentTarget.value)}
      >
        {toggle.label}
      </ToggleButton>
    </div>
  ));

  const inputsList = inputs.map((input) => (
    <Form.Group key={input.label}>
      <FloatingLabel
        className="mb-3 text-muted"
        controlId={input.label}
        label={input.label}
      >
        <Form.Control
          as={input.as}
          name={input.label.toLowerCase()}
          type={input.type}
          placeholder={input.label}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[input.label.toLowerCase()]}
          style={input.style}
        />
        {formik.touched[input.label.toLowerCase()] &&
        formik.errors[input.label.toLowerCase()] ? (
          <div className="text-danger text-end fs-xs pe-3">
            {formik.errors[input.label.toLowerCase()]}
          </div>
        ) : null}
      </FloatingLabel>
    </Form.Group>
  ));

  return (
    <Modal show={props.modalShow} onHide={handleHide} centered>
      <Modal.Header className="mb-1" closeButton>
        <Modal.Title>What project are you looking for?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4">
        <Form onSubmit={formik.handleSubmit} noValidate>
          <ButtonGroup className="mb-3">{togglesList}</ButtonGroup>
          {inputsList}
          <div className="row py-2">
            <div className="col-lg-6 col-md-8">
              <Button className="d-block w-100" variant="primary" type="submit">
                Send Request
              </Button>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
