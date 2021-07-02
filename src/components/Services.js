import React from 'react';
import WOW from 'wow.js';

const Services = () => {
  const wow = new WOW();
  wow.init();

  return (
    <section className="services section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title align-left">
              <span className="wow fadeInDown" data-wow-delay=".2s">
                Core Features
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Provide Awesome Service With Our Tools
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="single-head">
          <img
            className="service-patern wow fadeInLeft"
            data-wow-delay=".5s"
            src="assets/images/service/service-patern.png"
            alt="#"
          />
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service wow fadeInUp" data-wow-delay=".2s">
                <h3>
                  <a href="service-single.html">
                    Discover, Explore the Product
                  </a>
                </h3>
                <div className="icon">
                  <i className="lni lni-microscope"></i>
                </div>
                <p>Discover, Explore & Understanding The Product</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service wow fadeInUp" data-wow-delay=".4s">
                <h3>
                  <a href="service-single.html">
                    Art Direction & Brand Strategy
                  </a>
                </h3>
                <div className="icon">
                  <i className="lni lni-blackboard"></i>
                </div>
                <p>Art Direction & Brand Communication</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service wow fadeInUp" data-wow-delay=".6s">
                <h3>
                  <a href="service-single.html">
                    Product UX, Design & Development‎‎
                  </a>
                </h3>
                <div className="icon">
                  <i className="lni lni-ux"></i>
                </div>
                <p>Digital Product UX, Design & Development</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service wow fadeInUp" data-wow-delay=".8s">
                <h3>
                  <a href="service-single.html">
                    Marketing Strategy & SEO Campaigns
                  </a>
                </h3>
                <div className="icon">
                  <i className="lni lni-graph"></i>
                </div>
                <p>Marketing Strategy & SEO Campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
