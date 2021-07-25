import React from 'react';

const Employer = (props) => {
  const jobRole = props.jobRole;
  const organization = props.organization;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const date = startDate + ' - ' + endDate;
  const summary = props.summary;

  const result = props.duties.split(';');
  const dutiesList = result.map((duty, index) => (
    <li className="mb-0" key={index}>
      {duty}
    </li>
  ));

  return (
    <div className="mb-5">
      <h6 className="m-0">{jobRole}</h6>
      <h6 className="fw-light">
        <span className="text-uppercase fs-sm">{organization}</span> | {date}
      </h6>
      <ul className="list-unstyled">{dutiesList}</ul>
    </div>
  );
};

export default Employer;
