import React from 'react';

const ServicesAround = () => {
  return (
    <section class="bg-faded-primary position-relative py-md-7 py-5">
      <div class="container my-2 my-md-0">
        <div class="row align-items-center">
          <div class="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
            <img
              class="d-block mx-md-0 mx-auto"
              src="img/demo/personal-portfolio/services/illustration.svg"
              alt="Illustration"
            />
          </div>
          <div class="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
            <div class="mx-md-0 mx-auto" style={{ maxWidth: '500px' }}>
              <h2 class="mb-md-5 mb-4">What I do best</h2>
              <div class="d-md-flex align-items-start d-block mb-4 pb-2">
                <img
                  class="me-md-4 mb-md-0 mb-4"
                  src="img/demo/personal-portfolio/services/01.svg"
                  alt="Icon"
                />
                <div class="ps-md-2">
                  <h3 class="h6 mb-2">Creative illustrations</h3>
                  <p class="mb-0 fs-sm">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis voluptatum deleniti atque.
                  </p>
                </div>
              </div>
              <div class="d-md-flex align-items-start d-block mb-4 pb-2">
                <img
                  class="me-md-4 mb-md-0 mb-4"
                  src="img/demo/personal-portfolio/services/02.svg"
                  alt="Icon"
                />
                <div class="ps-md-2">
                  <h3 class="h6 mb-2">Graphic identity and branding</h3>
                  <p class="mb-0 fs-sm">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia occaecati cupiditate non provident.
                  </p>
                </div>
              </div>
              <div class="d-md-flex align-items-start d-block">
                <img
                  class="me-md-4 mb-md-0 mb-4"
                  src="img/demo/personal-portfolio/services/03.svg"
                  alt="Icon"
                />
                <div class="ps-md-2">
                  <h3 class="h6 mb-2">Graphic Packaging Design</h3>
                  <p class="mb-0 fs-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shape shape-top shape-curve bg-body">
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

export default ServicesAround;
