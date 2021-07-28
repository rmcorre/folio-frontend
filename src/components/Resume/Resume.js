import React from 'react';

import Identity from '@Identity';
import Summary from '@Summary';
import Background from '@Background';
import Detail from '@Detail';

const Resume = () => {
  return (
    <>
      <h1 className="visually-hidden">Resume</h1>
      <main className="resume py-9">
        <Identity />
        <Summary />
        <Background />
        <Detail />
      </main>
    </>
  );
};

export default Resume;
