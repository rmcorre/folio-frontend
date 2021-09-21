import { useState, useEffect, useRef } from 'react';
import AuthNav from './auth/AuthNav';

// Need this for modal functionality
// eslint-disable-next-line no-unused-vars
import Modal from 'bootstrap';

import logo from '../img/logo/hcLogoMaster.svg';

const DocumentHeader = (props) => {
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
    <header ref={header} className={`header ${navbarStuck}`}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
        <div className="container px-0 px-xl-3">
          <button
            className="navbar-toggler ms-n2 me-2"
            type="button"
            data-bs-target="#primaryMenu"
            data-bs-toggle="offcanvas"
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
            id="primaryMenu"
            className="offcanvas offcanvas-collapse order-lg-2"
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
                  <a className="nav-link" href="/cv">
                    CV
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
      </nav>
    </header>
  );
};

export default DocumentHeader;
