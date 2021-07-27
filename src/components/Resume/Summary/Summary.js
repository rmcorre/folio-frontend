import React from 'react';
import AboutMe from '@AboutMe';
import Achievements from '@Achievements';

const Summary = () => {
  return (
    <section className="summary mb-7">
      <div className="container">
        <div className="row gx-6">
          <div className="col-md-6 mb-4">
            <AboutMe />
          </div>
          <div className="col-md-6">
            <Achievements />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
