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
      <div className="fw-light mb-2">
        <span className="text-uppercase fs-sm">{organization}</span> | {date}
      </div>
      <p>{summary}</p>
      {/* <ul className="list-unstyled"></ul> */}
    </div>
  );
};

export default Employer;
