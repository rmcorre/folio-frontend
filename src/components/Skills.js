import React from 'react';
import WOW from 'wow.js';

import illustration from '../img/skills.svg';
import icon1 from '../img/services/01.svg';
import icon2 from '../img/services/02.svg';
import icon3 from '../img/services/03.svg';
import html5Logo from '../img/skills/html5LogoOptimized.svg';
import css3Logo from '../img/skills/css3LogoOptimized.svg';
import jsLogo from '../img/skills/jsLogoOptimized.svg';
import bootstrapIcon from '../img/skills/bootstrapLogoOptimized.svg';
import sassIcon from '../img/skills/sassSealLogoOptimized.svg';

const Services = () => {
  const wow = new WOW();
  wow.init();

  return (
    <section className="position-relative py-md-7 py-5">
      <div className="container my-2 my-md-0">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
            <div className="mx-md-0 mx-auto" style={{ maxWidth: '500px' }}>
              <h2 className="wow fadeInUp mb-md-5 mb-4" data-wow-delay=".3s">
                Skills I've Aquired
              </h2>
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block mb-4 pb-2"
                data-wow-delay=".5s"
              >
                {/* <img className="me-md-4 mb-md-0 mb-4" src={icon1} alt="Icon" /> */}
                <div className="ps-md-2">
                  <h3 className="h6 mb-2">Front End</h3>
                  <div className="d-flex flex-wrap text-primary">
                    <img src={html5Logo} />
                    <img src={css3Logo} />
                    <img src={jsLogo} />
                    <img src={bootstrapIcon} />
                    <img src={sassIcon} />
                  </div>
                </div>
              </div>
              {/* <div
                className="wow fadeInUp d-md-flex align-items-start d-block mb-4 pb-2"
                data-wow-delay=".7s"
              >
                <img className="me-md-4 mb-md-0 mb-4" src={icon2} alt="Icon" />
                <div className="ps-md-2">
                  <h3 className="h6 mb-2">UI/UX</h3>
                  <p className="mb-0 fs-sm">
                    Design and develop user interactions on web pages.
                  </p>
                </div>
              </div> */}
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block mb-4 pb-2"
                data-wow-delay="1s"
              >
                {/* <img className="me-md-4 mb-md-0 mb-4" src={icon3} alt="Icon" /> */}
                <div className="ps-md-2">
                  <h3 className="h6 mb-2">Back End</h3>
                  <div className="d-flex flex-wrap text-primary">
                    <img src={html5Logo} />
                    <img src={css3Logo} />
                    <img src={jsLogo} />
                    <img src={bootstrapIcon} />
                    <img src={sassIcon} />
                  </div>
                </div>
              </div>
              {/* <div
                className="wow fadeInUp d-md-flex align-items-start d-block mb-4 pb-2"
                data-wow-delay="1s"
              >
                <img className="me-md-4 mb-md-0 mb-4" src={icon3} alt="Icon" />
                <div className="ps-md-2">
                  <h3 className="h6 mb-2">REST</h3>
                  <p className="mb-0 fs-sm">
                    Develop and design RESTful services and APIs.
                  </p>
                </div>
              </div> */}
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block mb-4 pb-2"
                data-wow-delay="1s"
              >
                {/* <img className="me-md-4 mb-md-0 mb-4" src={icon3} alt="Icon" /> */}
                <div className="ps-md-2">
                  <h3 className="h6 mb-2">Best Practices</h3>
                  <p className="mb-0 fs-sm">
                    Ensure that non-functional requirements such as security,
                    performance, maintainability, scalability, usability, and
                    reliability are being considered when architecting
                    solutions.
                  </p>
                </div>
              </div>
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block"
                data-wow-delay="1s"
              >
                {/* <img className="me-md-4 mb-md-0 mb-4" src={icon3} alt="Icon" /> */}
                <div className="ps-md-2">
                  <h3 className="h6 mb-2">Ambition and Curiosity</h3>
                  <p className="mb-0 fs-sm">
                    Keep job knowledge up-to-date by studying new development
                    tools and programming techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
            <img
              className="d-block mx-md-0 mx-auto"
              src={illustration}
              alt="Illustration"
            />
          </div>
        </div>
      </div>
      {/* <div className="shape shape-top shape-curve bg-body">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
          <path
            fill="currentColor"
            d="M3000,185.4V0H0v185.4C496.4,69.8,996.4,12,1500,12S2503.6,69.8,3000,185.4z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default Services;
