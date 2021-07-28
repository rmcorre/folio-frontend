import React from 'react';

import EmploymentList from '@EmploymentList';
import EducationList from '@EducationList';

const background = () => {
  return (
    <section className="background mb-7">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-7">
            <EducationList />
          </div>
          <div className="col-md-6">
            <EmploymentList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default background;
