import React from 'react';

import Identity from './Identity';
import AboutMe from './AboutMe';
import Skills from './Skills';
import EducationList from './Education';
import EmploymentList from './Employment';

const Resume = () => {
  return (
    <>
      <h1 className="visually-hidden">Resume</h1>
      <main className="resume py-9">
        <div className="container">
          <div className="row">
            <div className="col">
              <Identity />
            </div>
          </div>
          <div className="row gx-7">
            <div className="col-md-5">
              <AboutMe />
              <EducationList />
              <Skills />
            </div>
            <div className="col-md-7">
              <EmploymentList />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
