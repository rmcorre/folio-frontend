import React from 'react';

const PricingTable = () => {
  return (
    <section className="pricing-table section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <span className="wow fadeInDown" data-wow-delay=".2s">
                Pricing Table
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Our Pricing Plan
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-table wow fadeInUp" data-wow-delay=".2s">
              <div className="table-head">
                <h4 className="title">Single use</h4>
                <div className="price">
                  <p className="amount">
                    $10<span className="duration">per month</span>
                  </p>
                </div>
              </div>
              <ul className="table-list">
                <li>Up to 5 users</li>
                <li>Basic support on Github</li>
                <li>Monthly updates</li>
                <li>Free cancelation</li>
              </ul>
              <div className="button">
                <a className="btn" href="#">
                  Start free trial
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-table wow fadeInUp" data-wow-delay=".4s">
              <div className="table-head">
                <h4 className="title">Multiple use</h4>
                <div className="price">
                  <p className="amount">
                    $20<span className="duration">per month</span>
                  </p>
                </div>
              </div>
              <ul className="table-list">
                <li>Up to 10 users</li>
                <li>Basic support on Github</li>
                <li>Monthly updates</li>
                <li>Free cancelation</li>
              </ul>
              <div className="button">
                <a className="btn" href="#">
                  Start free trial
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-table wow fadeInUp" data-wow-delay=".6s">
              <div className="table-head">
                <h4 className="title">Extended use</h4>
                <div className="price">
                  <p className="amount">
                    $30<span className="duration">per month</span>
                  </p>
                </div>
              </div>
              <ul className="table-list">
                <li>Up to 20 users</li>
                <li>Basic support on Github</li>
                <li>Monthly updates</li>
                <li>Free cancelation</li>
              </ul>
              <div className="button">
                <a className="btn" href="#">
                  Start free trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
