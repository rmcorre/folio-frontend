import React, { useState, useEffect, useRef } from 'react';
import AuthNav from '../components/auth/AuthNav';

// Need this for modal functionality
// eslint-disable-next-line no-unused-vars
import { Modal } from 'bootstrap';

import logo from '../img/logo/hcLogoMaster.svg';

const Header = (props) => {
  const [navbarStuck, setNavbarStuck] = useState('');
  const [authNav, setAuthNav] = useState('');
  const header = useRef(null);

  const handleScroll = (e) => {
    if (e.currentTarget.pageYOffset > 500) {
      document.body.style.paddingTop = header.current.offsetHeight + 'px';
      setNavbarStuck('navbar-stuck');
    } else {
      document.body.style.paddingTop = '';
      setNavbarStuck('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarStuck]);

  useEffect(() => {
    if (props.admin) {
      setAuthNav(<AuthNav />);
    }
  }, [props.admin]);

  return (
    <header
      ref={header}
      className={`header navbar navbar-expand-lg navbar-light bg-light navbar-sticky ${navbarStuck}`}
    >
      <div className="navbar-search bg-light">
        <div className="container d-flex flex-nowrap align-items-center">
          <i className="ai-search fs-xl"></i>
          <input
            className="form-control form-control-xl navbar-search-field"
            type="text"
            placeholder="Search site"
          />
          <div className="d-flex align-items-center">
            <span className="text-muted fs-xs mt-1 d-none d-sm-inline">
              Close
            </span>
            <button
              className="btn-close p-2"
              type="button"
              data-bs-toggle="search"
            ></button>
          </div>
        </div>
      </div>
      <div className="container px-0 px-xl-3">
        <button
          className="navbar-toggler ms-n2 me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#primaryMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          className="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4"
          href="/"
        >
          <img
            className="d-none d-lg-block"
            src={logo}
            alt="Around"
            width="50"
          />
          <img className="d-lg-none" src={logo} alt="Around" width="36" />
        </a>
        <div className="d-flex align-items-center order-lg-3 ms-lg-auto">
          {authNav}
          <a
            className="btn btn-primary d-lg-inline-block d-none"
            href="#modal-contact"
            data-bs-toggle="modal"
          >
            Hire me
          </a>
          <a
            className="btn btn-sm btn-primary d-lg-none d-inline-block"
            href="#modal-contact"
            data-bs-toggle="modal"
          >
            Hire me
          </a>
        </div>
        <div
          className="offcanvas offcanvas-collapse order-lg-2"
          id="primaryMenu"
        >
          <div className="offcanvas-header navbar-shadow">
            <h5 className="mt-1 mb-0">Menu</h5>
            <button
              className="btn-close lead"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                  Admin
                </a>
              </li>
            </ul>
          </div>
          <div className="offcanvas-footer">
            <a
              className="btn d-block w-100 btn-primary"
              href="#modal-contact"
              data-bs-toggle="modal"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
