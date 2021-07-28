import React from 'react';

const Education = (props) => {
  const course = props.course;
  const institution = props.institution;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const country = props.country;
  const date = startDate + ' - ' + endDate;

  return (
    <div className="mb-4">
      <h6 className="m-0">{course}</h6>
      <p className="h6 fw-light m-0">
        <span className="text-uppercase fs-sm">{institution}</span> | {date} |
        <span className="text-uppercase fs-sm"> {country}</span>
      </p>
    </div>
  );
};

export default Education;
