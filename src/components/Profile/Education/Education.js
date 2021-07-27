import React from 'react';

const Education = (props) => {
  const course = props.course;
  const institution = props.institution;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const country = props.country;
  const date = startDate + ' - ' + endDate;

  return (
    <div>
      <h6 className="m-0">{course}</h6>
      <h6 className="fw-light">
        <span className="text-uppercase fs-sm">{institution}</span> | {date}
      </h6>
    </div>
  );
};

export default Education;
