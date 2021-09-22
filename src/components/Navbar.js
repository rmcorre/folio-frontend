const DocumentNav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
      {props.children}
    </nav>
  );
};

export default DocumentNav;
