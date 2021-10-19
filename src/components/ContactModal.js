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
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Name',
    value: '',
    style: {},
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Email',
    value: '',
    style: {},
  },
  {
    id: 'message',
    name: 'message',
    as: 'textarea',
    label: 'Project Description',
    placeholder: 'Project Description',
    value: '',
    style: { height: '120px' },
  },
];

const ContactModal = (props) => {
  const [radioValue, setRadioValue] = useState('1');

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

  const togglesList = toggles.map((toggle) => (
    <div key={toggle.id} className="me-2 mb-2">
      <ToggleButton
        variant="outline-primary"
        id={`toggle-${toggle.id}`}
        type={toggle.type}
        name={toggle.name}
        value={toggle.value}
        checked={radioValue === toggle.value}
        onChange={(e) => setRadioValue(e.currentTarget.value)}
      >
        {toggle.text}
      </ToggleButton>
    </div>
  ));

  const inputsList = inputs.map((input) => (
    <Form.Group key={input.id}>
      <FloatingLabel
        className="mb-3 text-muted"
        controlId={input.id}
        label={input.label}
      >
        <Form.Control
          as={input.as}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[input.id]}
          style={input.style}
        />
        {formik.touched[input.id] && formik.errors[input.id] ? (
          <div className="text-danger text-end fs-xs pe-3">
            {formik.errors[input.id]}
          </div>
        ) : null}
      </FloatingLabel>
    </Form.Group>
  ));

  return (
    <Modal
      show={props.modalShow}
      onHide={() => {
        props.setModalShow(false);
        formik.handleReset();
      }}
      centered
    >
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
