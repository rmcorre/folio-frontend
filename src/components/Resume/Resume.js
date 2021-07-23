import React from 'react';

import ProfileSection from '@ProfileSection';
import SummarySection from '@SummarySection';
import SkillSetSection from '@SkillSetSection';
import EducationSection from '@EducationSection';
import ExperienceSection from '@ExperienceSection';

const Resume = (props) => {
  return (
    <>
      <main>
        <div className="container-md mt-md-5">
          <h1 className="visually-hidden">Resume</h1>
          <div className="row min-vh-100 mb-5">
            <div className="col-sm-5 g-0 bg-primary text-white">
              <ProfileSection />
              <SummarySection />
              <SkillSetSection />
            </div>
            <div className="col-sm-7 g-0 bg-white">
              <EducationSection />
              <ExperienceSection />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
