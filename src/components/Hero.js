import React from 'react';

const Hero = () => {
  return (
    <section className="hero-area">
      <div className="hero-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 co-12">
              <div className="home-slider">
                <div className="hero-text">
                  <h1 className="wow fadeInUp" data-wow-delay=".3">
                    Take your business to next level.
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                  <div className="button wow fadeInUp" data-wow-delay=".7s">
                    <a href="about-us.html" className="btn">
                      Discover More
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
