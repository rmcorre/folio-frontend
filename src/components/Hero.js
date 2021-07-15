import React from 'react';
import WOW from 'wow.js';

import heroImage from '../img/developer4.svg';

const HeroAround = () => {
  const wow = new WOW();
  wow.init();

  return (
    <section className="container mb-3 my-md-0 py-5 py-md-6">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-5 order-md-1 order-2 text-md-start text-center">
          <h1
            className="wow fadeInUp display-4 mb-lg-4 mb-3"
            data-wow-delay=".3s"
          >
            Hey, I’m Horacio
          </h1>
          <h2
            className="wow fadeInUp mb-lg-5 mb-4 text-muted"
            data-wow-delay=".5s"
          >
            Full Stack Developer &amp; Illustrator
          </h2>
          <div className="wow fadeInUp text-nowrap" data-wow-delay=".7s">
            <a className="btn btn-translucent-primary me-3" href="#">
              <i className="ai-arrow-down-circle mt-n1 me-2"></i>Download CV
            </a>
            <a
              className="btn btn-outline-primary"
              href="#portfolio"
              data-scroll
            >
              Portfolio
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-md-7 order-md-2 order-1 mb-md-0 mb-grid-gutter">
          <img src={heroImage} alt="Illustration" rel="preload" as="image" />
        </div>
      </div>
    </section>
  );
};

export default HeroAround;
