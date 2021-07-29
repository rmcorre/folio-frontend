import React from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

import Education from '../Profile/Education/Education';

const EducationList = () => {
  const { educations } = usePortfolioAPI();

  const educationList = educations.map(
    ({
      id,
      institution,
      course,
      startDate,
      endDate,
      educationAddress: { countryRegion },
    }) => (
      <Education
        key={id}
        institution={institution}
        course={course}
        startDate={startDate}
        endDate={endDate}
        country={countryRegion}
      />
    )
  );

  return (
    <section className="education mb-5">
      <div>
        <h5 className="text-uppercase">Education</h5>
        {educationList}
      </div>
    </section>
  );
};

export default EducationList;
