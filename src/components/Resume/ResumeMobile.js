import React from 'react';

import Identity from '@Identity';
import Summary from '@Summary';
import Background from '@Background';
import Detail from '@Detail';
import Skills from './Detail/Skill';
import EducationList from './Background/EducationList';
import EmploymentList from './Background/EmploymentList';

const Resume = () => {
  return (
    <>
      <h1 className="visually-hidden">Resume</h1>
      <main className="resume py-9">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-7">
              <Identity />
            </div>
          </div>
          <div className="row gx-7">
            <div className="col-md-5">
              <Summary />
              <Skills />
            </div>
            <div className="col-md-7">
              <EducationList />
              <EmploymentList />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
