import logo from '../../img/logo/hcLogoMaster.svg';

const NavbarBranding = () => {
  return (
    <a
      className="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4"
      href="/"
    >
      <img
        className="d-none d-lg-block"
        src={logo}
        alt="Site logo"
        width="50"
      />
      <img className="d-lg-none" src={logo} alt="Site logo" width="36" />
    </a>
  );
};

export default NavbarBranding;
