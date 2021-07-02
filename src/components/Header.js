import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand logo" href="index.html">
                  <img
                    className="logo1"
                    src="assets/images/logo/logo.svg"
                    alt="Logo"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="active" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a href="#">Services</a>
                    </li>
                    <li className="nav-item">
                      <a href="#">Portfolio</a>{' '}
                    </li>
                    <li className="nav-item">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="404.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="button">
                  <a href="contact.html" className="btn">
                    Get it now
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
