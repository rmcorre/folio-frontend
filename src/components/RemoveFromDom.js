import React, { useState, useEffect } from 'react';

const RemoveFromDom = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, props.delay);
  }, [props.delay]);

  return visible ? <>{props.children}</> : null;
};

export default RemoveFromDom;
