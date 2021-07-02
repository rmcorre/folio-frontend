import React from 'react';

const Brand = () => {
  return (
    <div className="brand-area section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <div
              className="section-title align-left wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <span>Our Awesome Clients</span>
              <h2>We built Best solutions for your company</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div
              className="brand-logo-wrapper wow fadeInRight"
              data-wow-delay=".4s"
            >
              <ul className="brand-list liststyle d-flex flex-wrap justify-content-center">
                <li>
                  <a href="#">
                    <img
                      src="assets/images/clients/client1.png"
                      alt="Brand Logo Images"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/clients/client2.png"
                      alt="Brand Logo Images"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/clients/client3.png"
                      alt="Brand Logo Images"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/clients/client4.png"
                      alt="Brand Logo Images"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/clients/client5.png"
                      alt="Brand Logo Images"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="assets/images/clients/client6.png"
                      alt="Brand Logo Images"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
