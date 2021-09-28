import { useState, useEffect } from 'react';
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

import img1 from '../img/testimonials/01.jpg';
import img2 from '../img/testimonials/02.jpg';
import illustration from '../img/testimonials/illustration.svg';

// Temporary - add to scss
const testimonialSource = {
  fontSize: '2rem',
  color: '#9e9fb4',
};

const Testimonials = () => {
  // eslint-disable-next-line
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    setSlider(
      tns({
        container: '.tns-carousel-wrapper .tns-carousel-inner',
        controlsText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
        navPosition: 'top',
        controlsPosition: 'top',
        mouseDrag: !0,
        speed: 600,
        autoplayHoverPause: !0,
        autoplayButtonOutput: !1,
        gutter: 20,
        responsive: {
          0: { nav: true, controls: false },
          991: { nav: false, controls: true },
        },
      })
    );
  }, []);

  return (
    <section className="bg-faded-primary position-relative py-md-7 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 order-md-1 order-2">
            <div className="tns-carousel-wrapper">
              <div className="tns-carousel-inner">
                <blockquote className="blockquote mt-3 mb-0">
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida dignissimos
                    ducimus qui blanditiis praesentium voluptatum facere officia
                    ratione quos esse corporis cum.
                  </p>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis voluptatum deleniti atque.
                  </p>
                  <footer
                    className="d-flex align-items-center"
                    style={testimonialSource}
                  >
                    <i className="bi bi-person-circle"></i>
                    {/* <img
                      className="rounded-circle"
                      src={img1}
                      alt="Tim Brooks"
                      width="42"
                    /> */}
                    <div className="text-heading fs-md fw-medium ps-2 ms-1">
                      Guest
                    </div>
                  </footer>
                </blockquote>
                <blockquote className="blockquote mt-3 mb-0">
                  <p>
                    Consectetur adipisicing elit. Minus facilis asperiores
                    deleniti ipsum quod ipsa voluptate dicta quasi. Dignissimos
                    accusantium temporibus sunt culpa minima, earum
                    reprehenderit aspernatur inventore magnam labore.
                  </p>
                  <p>
                    Velit modi neque placeat consequatur voluptatibus odit aut
                    iste dolorum dolorem magnam.
                  </p>
                  <footer
                    className="d-flex align-items-center"
                    style={testimonialSource}
                  >
                    <i className="bi bi-person-circle"></i>
                    {/* <img
                      className="rounded-circle"
                      src={img2}
                      alt="Tim Brooks"
                      width="42"
                    /> */}
                    <div className="text-heading fs-md fw-medium ps-2 ms-1">
                      Guest
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-lg-1 order-md-2 order-1 mb-md-0 mb-grid-gutter">
            <img
              className="d-block mx-md-0 mx-auto"
              src={illustration}
              alt="Illustration"
            />
          </div>
        </div>
      </div>
      <div className="shape shape-bottom shape-curve bg-body">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
          <path
            fill="currentColor"
            d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
