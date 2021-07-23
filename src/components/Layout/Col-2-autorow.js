import React from 'react';

const Col_2_autorow = (props) => {
  const heading = props.heading;
  const list = props.list;

  return (
    <div className="mb-5">
      <h6 className="mb-1">{heading}</h6>
      <div className="grid-2-col">{list}</div>
    </div>
  );
};

export default Col_2_autorow;
