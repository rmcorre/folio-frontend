import React from 'react';

import Identity from '../components/Resume/Identity';
import AboutMe from '../components/Resume/AboutMe';
import Skills from '../components/Resume/Skills';
import EducationList from '../components/Resume/Education';
import EmploymentList from '../components/Resume/Employment';

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
