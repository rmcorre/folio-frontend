import React from 'react';
import ShuffleGrid from './Shuffle/ShuffleGrid';

const Portfolio = () => {
  return (
    <section id="portfolio" className="overflow-hidden">
      <div className="container py-lg-7 py-md-6 py-5 my-2 my-md-0">
        <h2 className="mb-3 text-center">My portfolio</h2>
        <p className="mb-4 pb-md-2 text-muted text-center">
          Most recent projects I am working on or have completed
        </p>
        <div className="masonry-filterable">
          <ShuffleGrid />
        </div>
        {/* <div className="pt-3 text-center">
          <a className="btn btn-primary" href="#">
            <i className="ai-refresh-cw me-2"></i>Load more
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
