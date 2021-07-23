import React from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

import Experience from '../Profile/Experience/Experience';

const ExperienceSection = (props) => {
  const { experiences } = usePortfolioAPI();

  const experienceList = experiences.map(
    ({ id, organization, startDate, endDate, jobRole, summary, duties }) => (
      <Experience
        key={id}
        organization={organization}
        startDate={startDate}
        endDate={endDate}
        jobRole={jobRole}
        summary={summary}
        duties={duties}
      />
    )
  );

  return (
    <section className="resume-detail-body">
      <h5>EXPERIENCE</h5>
      {experienceList}
    </section>
  );
};

export default ExperienceSection;
