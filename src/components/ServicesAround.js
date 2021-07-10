import React from 'react';
import WOW from 'wow.js';

const ServicesAround = () => {
  const wow = new WOW();
  wow.init();

  return (
    <section className="bg-faded-primary position-relative py-md-7 py-5">
      <div className="container my-2 my-md-0">
        <div className="row align-items-center">
          <div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
            <img
              className="d-block mx-md-0 mx-auto"
              src="img/demo/personal-portfolio/services/illustration.svg"
              alt="Illustration"
            />
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
            <div className="mx-md-0 mx-auto" style={{ maxWidth: '500px' }}>
              <h2 className="wow fadeInUp mb-md-5 mb-4" data-wow-delay=".3s">
                What I do best
              </h2>
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block mb-4 pb-2"
                data-wow-delay=".5s"
              >
                <img
                  className="me-md-4 mb-md-0 mb-4"
                  src="img/demo/personal-portfolio/services/01.svg"
                  alt="Icon"
                />
                <div className="ps-md-2">
                  <h3 className="h6 mb-2">Creative illustrations</h3>
                  <p className="mb-0 fs-sm">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis voluptatum deleniti atque.
                  </p>
                </div>
              </div>
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block mb-4 pb-2"
                data-wow-delay=".7s"
              >
                <img
                  className="me-md-4 mb-md-0 mb-4"
                  src="img/demo/personal-portfolio/services/02.svg"
                  alt="Icon"
                />
                <div className="ps-md-2">
                  <h3 className="h6 mb-2">Graphic identity and branding</h3>
                  <p className="mb-0 fs-sm">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia occaecati cupiditate non provident.
                  </p>
                </div>
              </div>
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block"
                data-wow-delay="1s"
              >
                <img
                  className="me-md-4 mb-md-0 mb-4"
                  src="img/demo/personal-portfolio/services/03.svg"
                  alt="Icon"
                />
                <div className="ps-md-2">
                  <h3 className="h6 mb-2">Graphic Packaging Design</h3>
                  <p className="mb-0 fs-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape shape-top shape-curve bg-body">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
          <path
            fill="currentColor"
            d="M3000,185.4V0H0v185.4C496.4,69.8,996.4,12,1500,12S2503.6,69.8,3000,185.4z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ServicesAround;
