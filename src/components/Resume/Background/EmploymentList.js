import React from 'react';
import { usePortfolioAPI } from '../../../store/portfolioContext';

import Employer from '../../Profile/Experience/Employer';

const Employment = () => {
  const { experiences } = usePortfolioAPI();

  const experienceList = experiences.map(
    ({ id, organization, startDate, endDate, jobRole, summary, duties }) => (
      <Employer
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

  return <>{experienceList}</>;
};

export default Employment;
