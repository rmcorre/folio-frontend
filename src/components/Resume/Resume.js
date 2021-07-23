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
        <div className="container mt-lg-5">
          <h1 className="visually-hidden">RESUME</h1>
          <div className="row min-vh-100 mb-5">
            <div className="col-md-5 g-0 bg-faded-primary">
              <ProfileSection />
              <SummarySection />
              <SkillSetSection />
            </div>
            <div className="col-md-7 g-0 bg-white">
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
