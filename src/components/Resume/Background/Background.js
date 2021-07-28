import React from 'react';

import EmploymentList from '@EmploymentList';
import EducationList from '@EducationList';

const background = () => {
  return (
    <section className="background mb-7">
      <div className="container">
        <div className="row gx-6">
          <div className="col-md">
            <h5>EMPLOYMENT</h5>
            <div className="grid-2-col">
              <EmploymentList />
            </div>
          </div>
          {/* <div className="col-md-6">
            <EducationList />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default background;
