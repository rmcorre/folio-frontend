import React from 'react';

import heroImage from '../img/developer4.svg';

const HeroAround = () => {
  return (
    <section class="container mb-3 my-md-0 py-5 py-md-6">
      <div class="row align-items-center">
        <div class="col-lg-4 col-md-5 order-md-1 order-2 text-md-start text-center">
          <h1 class="display-4 mb-lg-4 mb-3">Hey, I’m Horacio</h1>
          <h2 class="mb-lg-5 mb-4 text-muted">
            Full Stack Developer &amp; Illustrator
          </h2>
          <div class="text-nowrap">
            <a class="btn btn-translucent-primary me-3" href="#">
              <i class="ai-arrow-down-circle mt-n1 me-2"></i>Download CV
            </a>
            <a class="btn btn-outline-primary" href="#portfolio" data-scroll>
              Portfolio
            </a>
          </div>
        </div>
        <div class="col-lg-8 col-md-7 order-md-2 order-1 mb-md-0 mb-grid-gutter">
          <img src={heroImage} alt="Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroAround;
