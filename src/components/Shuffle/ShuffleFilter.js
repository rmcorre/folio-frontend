import React from 'react';

const ShuffleFilter = () => {
  return (
    <nav className="pb-3 mb-4" data-simplebar data-simplebar-auto-hide="false">
      <ul className="masonry-filters nav nav-tabs justify-content-sm-center flex-nowrap text-nowrap mb-0">
        <li className="nav-item">
          <a className="nav-link active" href="#" data-group="all">
            All
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" data-group="illustrations">
            Illustrations
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" data-group="packaging">
            Packaging
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" data-group="branding">
            Branding
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ShuffleFilter;
