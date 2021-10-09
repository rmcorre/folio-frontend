import { useState } from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ToggleButton } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import ButtonSubmit from './UI/Form/ButtomSubmit';

const radios = [
  { name: 'Front End', value: '1' },
  { name: 'Back End', value: '2' },
  { name: 'Feature', value: '3' },
];

const Content = (props) => {
  const [radioValue, setRadioValue] = useState('1');

  return (
    <>
      <Modal show={props.modalShow} centered>
        <Modal.Header className="mb-1" closeButton>
          <Modal.Title>What project are you looking for?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <form>
            <ButtonGroup className="mb-3">
              {radios.map((radio, idx) => (
                <div key={idx} className="me-2 mb-2">
                  <ToggleButton
                    id={`radio-${idx}`}
                    type="radio"
                    variant="outline-primary"
                    name="services"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                </div>
              ))}
            </ButtonGroup>
            <FloatingLabel
              className="mb-3 text-muted"
              controlId="floatingInput"
              label="Name"
            >
              <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3 text-muted"
              controlId="floatingInput"
              label="Email"
            >
              <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3 text-muted"
              controlId="floatingTextarea"
              label="Project Description"
            >
              <Form.Control
                as="textarea"
                placeholder="Project Description"
                style={{ height: '120px' }}
              />
            </FloatingLabel>
            <div className="row py-2">
              <div className="col-lg-6 col-md-8">
                <ButtonSubmit text={'Send Request'} />
              </div>
            </div>
          </form>
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
