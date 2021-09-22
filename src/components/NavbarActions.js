import { useState, useEffect } from 'react';
import AuthNav from './auth/AuthNav';

const NavbarActions = (props) => {
  const [authNav, setAuthNav] = useState('');

  useEffect(() => {
    if (props.admin) {
      setAuthNav(<AuthNav />);
    }
  }, [props.admin]);

  return (
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
  );
};

export default NavbarActions;
