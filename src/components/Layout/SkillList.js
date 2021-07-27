import React from 'react';

const SkillList = (props) => {
  const heading = props.heading;
  const list = props.list;

  return (
    <div className="mb-5">
      <h6 className="mb-1">{heading}</h6>
      <ul className="list-unstyled">{list}</ul>
      {/* <div className="grid-2-col">{list}</div> */}
    </div>
  );
};

export default SkillList;
