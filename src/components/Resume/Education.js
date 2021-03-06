import React from 'react';
import { useProfileAPI } from '../../store/profileContext';

import Education from '../Profile/Education/Education';

const EducationList = () => {
  const { educations } = useProfileAPI();

  const educationList = educations.map(
    ({
      id,
      institution,
      course,
      startDate,
      endDate,
      educationAddress: { townCity, countryRegion },
    }) => (
      <Education
        key={id}
        institution={institution}
        course={course}
        startDate={startDate}
        endDate={endDate}
        city={townCity}
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
