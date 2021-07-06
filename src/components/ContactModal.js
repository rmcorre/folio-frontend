import React from 'react';

const ContactModal = () => {
  return (
    <div className="modal fade" id="modal-contact" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header mb-1">
            <h4 className="modal-title">What project are you looking for?</h4>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form className="modal-body needs-validation py-4" novalidate>
            <div className="btn-group mb-3">
              <div className="me-2 mb-2">
                <input
                  className="btn-check"
                  type="radio"
                  name="services"
                  id="illustration"
                  autocomplete="off"
                  checked
                />
                <label className="btn btn-outline-primary" for="illustration">
                  Illustration
                </label>
              </div>
              <div className="me-2 mb-2">
                <input
                  className="btn-check"
                  type="radio"
                  name="services"
                  id="packaging"
                  autocomplete="off"
                />
                <label className="btn btn-outline-primary" for="packaging">
                  Packaging
                </label>
              </div>
              <div className="me-2 mb-2">
                <input
                  className="btn-check"
                  type="radio"
                  name="services"
                  id="branding"
                  autocomplete="off"
                />
                <label className="btn btn-outline-primary" for="branding">
                  Branding
                </label>
              </div>
            </div>
            <div className="input-group mb-3">
              <i className="ai-user position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input
                className="form-control rounded"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="input-group mb-3">
              <i className="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input
                className="form-control rounded"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3 pb-1">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Project description"
                required
              ></textarea>
            </div>
            <div className="row py-2">
              <div className="col-lg-6 col-md-8">
                <button className="btn btn-primary d-block w-100" type="submit">
                  Send Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
