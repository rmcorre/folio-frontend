const Education = (props) => {
  const course = props.course;
  const institution = props.institution;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const city = props.city;
  const country = props.country;
  const date = startDate + ' - ' + endDate;

  return (
    <div className="mb-4">
      <h6 className="m-0">{course}</h6>
      <div className="h6 fw-light m-0">
        <span className="text-uppercase fs-sm">{institution}</span> -{' '}
        <span className="text-uppercase fs-sm">
          {city ? city + ',' : ''} {country}
        </span>
      </div>
      <div className="fw-light lh-1 m-0">
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Education;
