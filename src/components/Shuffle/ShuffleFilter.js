import React, { useState } from 'react';

const ShuffleFilter = (props) => {
  const [buttons, setButtons] = useState([
    { key: '1', name: 'All', dataGroup: 'all' },
    { key: '2', name: 'Front End', dataGroup: 'frontEnd' },
    { key: '3', name: 'Back End', dataGroup: 'backEnd' },
    { key: '4', name: 'React', dataGroup: 'react' },
  ]);

  console.log(props.shuffle);

  const [active, setActive] = useState('1');

  const filterButtons = buttons.map((button) => {
    return (
      <li key={button.key} className="nav-item">
        <a
          data-key={button.key}
          className={active === button.key ? 'nav-link active' : 'nav-link'}
          href="/"
          data-group={button.dataGroup}
          onClick={(event) => {
            event.preventDefault();
            setActive(event.target.getAttribute('data-key'));
            props.shuffle.filter(event.target.getAttribute('data-group'));
          }}
        >
          {button.name}
        </a>
      </li>
    );
  });

  return (
    <nav className="pb-3 mb-4" data-simplebar data-simplebar-auto-hide="false">
      <ul className="masonry-filters nav nav-tabs justify-content-sm-center flex-nowrap text-nowrap mb-0">
        {filterButtons}
      </ul>
    </nav>
  );
};

export default ShuffleFilter;
