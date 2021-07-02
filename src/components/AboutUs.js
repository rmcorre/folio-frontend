import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="about-left">
              <div className="section-title align-left">
                <span className="wow fadeInDown" data-wow-delay=".2s">
                  What we do
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Websites that tell your brand's story
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  We're a digital product and UX agency Strategy, design and
                  development across all platforms.
                </p>
              </div>
              <div className="about-tab wow fadeInUp" data-wow-delay=".4s">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#t-tab1"
                      role="tab"
                    >
                      Content
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#t-tab2"
                      role="tab"
                    >
                      Strategy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#t-tab3"
                      role="tab"
                    >
                      Development
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="t-tab1"
                    role="tabpanel"
                  >
                    <div className="tab-content">
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla .Nemo en ipsam
                        voluptatem quia voluptas sit asper.
                      </p>
                      <ul>
                        <li>
                          <i className="lni lni-checkmark-circle"></i>{' '}
                          Commitment to excelence
                        </li>
                        <li>
                          <i className="lni lni-checkmark-circle"></i> Clients
                          are our partners
                        </li>
                        <li>
                          <i className="lni lni-checkmark-circle"></i> Fun is an
                          absolute must
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="t-tab2" role="tabpanel">
                    <div className="tab-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing , sed
                        do eiusmod tempor incididunt ut labore et dolore. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla .Nemo en ipsam
                        voluptatem quia voluptas sit asper.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="t-tab3" role="tabpanel">
                    <div className="tab-content">
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla .Nemo en ipsam
                        voluptatem quia voluptas sit asper.
                      </p>
                      <ul>
                        <li>
                          <i className="lni lni-checkmark-circle"></i>{' '}
                          Commitment to excelence
                        </li>
                        <li>
                          <i className="lni lni-checkmark-circle"></i> Clients
                          are our partners
                        </li>
                        <li>
                          <i className="lni lni-checkmark-circle"></i> Fun is an
                          absolute must
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-right wow fadeInRight" data-wow-delay=".4s">
              <img src="assets/images/about/about-img.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
