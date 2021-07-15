import React, { useState, useEffect } from 'react';

const TestUseEffect = () => {
  let count = 0;

  count = ++count;
  const message = 'Inside component';
  console.log(message, count);

  count = ++count;
  const [stateMessage, setStateMessage] = useState('Initial set state message');
  console.log(stateMessage, count);

  useEffect(() => {
    console.log(stateMessage, count);
  }, []);

  count = ++count;
  console.log(stateMessage, count);

  const increaseCountHandler = (evt) => {
    count = ++count;
    setStateMessage('UseEffect set state message');
  };

  return (
    <>
      {stateMessage + count}
      <div>
        <h1>Testing Use Effect Hook</h1>
        <button onClick={increaseCountHandler}>Increase Count</button>
      </div>
    </>
  );
};

export default TestUseEffect;
