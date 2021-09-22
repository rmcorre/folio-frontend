import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar/Navbar';

// Need this for modal functionality
// eslint-disable-next-line no-unused-vars
import Modal from 'bootstrap';

const PageHeader = (props) => {
  const [navbarStuck, setNavbarStuck] = useState('');
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

  return (
    <header ref={header} className={`header ${navbarStuck}`}>
      <Navbar admin={props.admin} />
    </header>
  );
};

export default PageHeader;
