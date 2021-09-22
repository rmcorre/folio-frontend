import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <>
      <button
        className="btn btn-outline-secondary text-dark d-lg-inline-block d-none"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Logout
      </button>
      <button
        className="btn btn-sm btn-outline-secondary text-dark d-lg-none d-inline-block"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
