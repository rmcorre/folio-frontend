import WOW from 'wow.js';
import illustration from '../img/services/team_work3.png';

const wow = new WOW();
wow.init();

const Services = () => {
  return (
    <section className="bg-faded-primary position-relative py-md-7 py-5">
      <div className="container my-2 my-md-0">
        <div className="row align-items-center">
          <div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
            <img
              className="d-block mx-md-0 mx-auto"
              src={illustration}
              alt="Illustration"
            />
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
            <div className="mx-md-0 mx-auto" style={{ maxWidth: '500px' }}>
              <h2 className="wow fadeInUp mb-md-5 mb-4" data-wow-delay=".3s">
                What I Can Offer
              </h2>
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block mb-4 pb-2"
                data-wow-delay=".5s"
              >
                <div className="ps-md-2">
                  <p className="mb-2 fs-sm">
                    Visually appealing front-end development, including
                    translation of designer mock-ups and wireframes into code.
                  </p>
                </div>
              </div>
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block mb-4 pb-2"
                data-wow-delay=".7s"
              >
                <div className="ps-md-2">
                  <p className="mb-2 fs-sm">
                    Functional databases, applications and servers. Develop and
                    design RESTful services and APIs.
                  </p>
                </div>
              </div>
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block mb-4 pb-2"
                data-wow-delay=".9s"
              >
                <div className="ps-md-2">
                  <p className="mb-0 fs-sm">
                    Ensure non-functional requirements such as security,
                    performance, maintainability, scalability, usability, and
                    reliability are being considered when architecting
                    solutions.
                  </p>
                </div>
              </div>
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block"
                data-wow-delay="1.1s"
              >
                <div className="ps-md-2">
                  <p className="mb-0 fs-sm">
                    Keep job knowledge up-to-date by learning new development
                    tools and programming techniques.
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

export default Services;
