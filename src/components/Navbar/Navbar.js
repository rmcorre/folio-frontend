import NavbarToggler from './NavbarToggler';
import NavbarBranding from './NavbarBranding';
import NavbarActions from './NavbarActions';
import NavbarNav from './NavbarNav';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
      <div className="container px-0 px-xl-3">
        <NavbarToggler target="#primaryMenu" toggle="offcanvas" />
        <NavbarBranding />
        <NavbarActions admin={props.admin} />
        <NavbarNav />
      </div>
    </nav>
  );
};

export default Navbar;
