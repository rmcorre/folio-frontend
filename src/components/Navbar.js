import NavbarToggler from './NavbarToggler';
import NavbarBranding from './NavbarBranding';
import NavbarActions from './NavbarActions';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
      <NavbarToggler target="#primaryMenu" toggle="offcanvas" />
      <NavbarBranding />
      <NavbarActions />
      {props.children}
    </nav>
  );
};

export default Navbar;
