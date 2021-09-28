import WOW from 'wow.js';

import heroImage from '../img/hero/developerResized.png';

const wow = new WOW();
wow.init();

const Hero = () => {
  return (
    <section className="container mb-3 my-md-0 py-5 py-md-6">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-5 order-md-1 order-2 text-md-start text-center">
          <h1
            className="wow fadeInUp display-4 mb-lg-4 mb-3"
            data-wow-delay=".3s"
          >
            Hey, <br /> I’m Horacio
          </h1>
          <h2
            className="wow fadeInUp mb-lg-5 mb-4 text-muted"
            data-wow-delay=".5s"
          >
            Full Stack Developer
          </h2>
          <div className="wow fadeInUp text-nowrap" data-wow-delay=".7s">
            <a className="btn btn-translucent-primary me-3" href="/cv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-down-circle me-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                />
              </svg>
              Download CV
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
          <img
            src={heroImage}
            alt="Illustration of a developer"
            rel="preload"
            as="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
