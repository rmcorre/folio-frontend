import React from 'react';

const Concept = (props) => {
  const concept = props.concept;
  return <span className="text-uppercase">{concept}</span>;
};

export default Concept;
