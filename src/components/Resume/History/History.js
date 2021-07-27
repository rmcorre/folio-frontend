import React from 'react';

import Employment from '@Employment';
import Education from '@Education';

const History = () => {
  return (
    <section className="history mb-7">
      <div className="container">
        <div className="row gx-6">
          <div className="col-md-6">
            <Employment />
          </div>
          <div className="col-md-6">
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
