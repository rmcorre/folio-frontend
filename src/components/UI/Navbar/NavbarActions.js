import { useState, useEffect } from 'react';
import AuthNav from '../../auth/AuthNav';

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
      <button
        className="btn btn-primary d-lg-inline-block d-none"
        onClick={() => {
          props.setModalShow(true);
        }}
      >
        Hire me
      </button>
      <button
        className="btn btn-sm btn-primary d-lg-none d-inline-block"
        onClick={() => {
          props.setModalShow(true);
        }}
      >
        Hire me
      </button>
    </div>
  );
};

export default NavbarActions;
