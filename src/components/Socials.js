import React from 'react';

import bgShape from '../img/socials/bg-shape.png';
import figure1 from '../img/socials/figure-1.png';
import figure2 from '../img/socials/figure-2.png';
import figure3 from '../img/socials/figure-3.png';
import github from '../img/socials/github.svg';
import linkedin from '../img/socials/linkedin.svg';

const Socials = () => {
  return (
    <section
      className="position-relative py-6 bg-no-repeat bg-position-center-bottom overflow-hidden"
      style={{ backgroundImage: `url(${bgShape})` }}
    >
      {/* Parallax */}
      <div className="parallax">
        <div className="parallax-layer" data-depth="0.1">
          <img src={figure1} alt="Layer 1" />
        </div>
        <div className="parallax-layer" data-depth="0.15">
          <img src={figure2} alt="Layer 2" />
        </div>
        <div className="parallax-layer" data-depth="0.25">
          <img src={figure3} alt="Layer 3" />
        </div>
      </div>
      {/* Content */}
      <div
        className="d-flex align-items-center position-absolute w-100 h-100"
        style={{ top: 0, left: 0, zIndex: 9 }}
      >
        <div className="container">
          <h2 className="mb-4 pb-sm-3 text-center">Follow me</h2>
          <div className="text-center">
            <a
              className="btn btn-pink btn-lg text-white mb-2 me-sm-4 me-2"
              href="https://github.com/rmcorre"
            >
              <img
                className="me-2"
                src={github}
                width="16"
                height="16"
                alt="Github Icon"
              ></img>
              Github
            </a>
            <a
              className="btn btn-blue btn-lg text-white mb-2"
              href="https://linkedin.com/in/horaciocorreia"
            >
              <img
                className="me-2"
                src={linkedin}
                width="16"
                height="16"
                alt="LinkedIn Icon"
              ></img>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
