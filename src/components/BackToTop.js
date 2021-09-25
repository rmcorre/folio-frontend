import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [show, setShow] = useState('');

  const handleShow = (e) => {
    e.currentTarget.pageYOffset > 600 ? setShow('show') : setShow('');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleShow);

    return () => {
      window.removeEventListener('scroll', handleShow);
    };
  }, []);

  return (
    <a
      className={`btn-scroll-top ${show}`}
      href="#top"
      data-scroll
      data-fixed-element
    >
      <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
      <i className="btn-scroll-top-icon bi bi-arrow-up"> </i>
    </a>
  );
};

export default BackToTop;
