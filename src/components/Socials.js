import React from 'react';

import github from '../img/socials/github.svg';
import linkedin from '../img/socials/linkedin.svg';

const Socials = () => {
  return (
    <section className="position-relative py-md-7 py-5">
      <div className="container">
        <div className="row">
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
