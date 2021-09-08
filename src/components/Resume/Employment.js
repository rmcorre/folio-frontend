import React from 'react';
import { useProfileAPI } from '../../store/profileContext';

import Employer from '../Profile/Experience/Employer';

const Employment = () => {
  const { experiences } = useProfileAPI();

  const experienceList = experiences.map(
    ({
      id,
      organization,
      location,
      startDate,
      endDate,
      jobRole,
      summary,
      duties,
    }) => (
      <Employer
        key={id}
        organization={organization}
        location={location}
        startDate={startDate}
        endDate={endDate}
        jobRole={jobRole}
        summary={summary}
        duties={duties}
      />
    )
  );

  return (
    <div>
      <h5>EMPLOYMENT</h5>
      {experienceList}
    </div>
  );
};

export default Employment;
