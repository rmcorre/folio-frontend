import React from 'react';

import Employment from '@Employment';
import Education from '@Education';

const History = () => {
  return (
    <section>
      <div className="container">
        <div className="row gx-6">
          <div className="col-md-6">
            <Employment />
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </section>
  );
};

export default History;
