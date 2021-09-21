import { useState, useEffect, useRef } from 'react';
import DocumentNav from './DocumentNav';
import NavbarToggler from './NavbarToggler';
import NavbarBranding from './NavbarBranding';
import AuthNav from './auth/AuthNav';

// Need this for modal functionality
// eslint-disable-next-line no-unused-vars
import Modal from 'bootstrap';

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
      <DocumentNav>
        <div className="container px-0 px-xl-3">
          <NavbarToggler target="#primaryMenu" toggle="offcanvas" />
          <NavbarBranding />
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
      </DocumentNav>
    </header>
  );
};

export default DocumentHeader;