import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="f-about single-footer">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/images/logo/footer-logo.svg" alt="Logo" />
                  </a>
                </div>
                <p>
                  Start building your creative website with our awesome template
                  Massive.
                </p>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="lni lni-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h3>Pages</h3>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Our Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h3>More Links</h3>
                <ul>
                  <li>
                    <a href="#">Topics</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">License</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h3>Support</h3>
                <ul>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="#">Forum</a>
                  </li>
                  <li>
                    <a href="#">Support Team</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-12">
                <div className="left">
                  <p>
                    Designed and Developed by
                    <a
                      href="https://graygrids.com/"
                      rel="nofollow"
                      target="_blank"
                    >
                      GrayGrids
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
