import React from 'react';

import { usePortfolioAPI } from '../store/portfolioContext';

const Hero = () => {
  const { profile } = usePortfolioAPI();

  return (
    <section className="hero-area">
      <div className="hero-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 co-12">
              <div className="home-slider">
                <div className="hero-text">
                  <h1
                    className="wow fadeInUp display-4 mb-lg-4 mb-3"
                    data-wow-delay=".3s"
                  >
                    Hey, I'm {profile.firstName}
                  </h1>
                  <h2
                    class="wow fadeInUp mb-lg-5 mb-4 text-muted w-75"
                    data-wow-delay=".4s"
                  >
                    {profile.role} &amp; Illustrator
                  </h2>
                  {/* <p className="wow fadeInUp" data-wow-delay=".5s">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p> */}
                  <div className="button wow fadeInUp" data-wow-delay=".7s">
                    <a
                      href="about-us.html"
                      className="btn btn-translucent-primary me-3"
                    >
                      Download CV
                    </a>
                    <a href="about-us.html" className="btn btn-outline-primary">
                      Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
