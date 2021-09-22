const NavbarNav = () => {
  return (
    <div id="primaryMenu" className="offcanvas offcanvas-collapse order-lg-2">
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
  );
};

export default NavbarNav;
