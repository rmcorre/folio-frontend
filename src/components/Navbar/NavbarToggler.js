const NavbarToggler = (props) => {
  return (
    <button
      className="navbar-toggler ms-n2 me-2"
      type="button"
      data-bs-target={props.target}
      data-bs-toggle={props.toggle}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

export default NavbarToggler;
