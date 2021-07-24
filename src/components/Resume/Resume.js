import React from 'react';

import ProfileSection from '@ProfileSection';
import SummarySection from '@SummarySection';
import SkillSetSection from '@SkillSetSection';
import EducationSection from '@EducationSection';
import ExperienceSection from '@ExperienceSection';

const Resume = (props) => {
  return (
    <>
      <main className="font-family__raleway">
        <section>
          <div className="container text-center py-7">
            <h1 className="display-1 mb-4">HORACIO CORREIA</h1>
            <h2 classNaame="display-6">Full Stack Developer</h2>
          </div>
        </section>
        <div className="container">
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
