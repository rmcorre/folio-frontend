import React from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

import Education from '../Profile/Education/Education';

const EducationSection = (props) => {
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
    <section className="resume-detail-body">
      <h4>Educational Background</h4>
      {educationList}
    </section>
  );
};

export default EducationSection;
