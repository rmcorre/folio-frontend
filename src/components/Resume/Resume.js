import React from 'react';

import Identity from '@Identity';
import Summary from '@Summary';
import History from '@History';

const Resume = () => {
  return (
    <>
      <h1 className="visually-hidden">Resume</h1>
      <main className="resume py-9">
        <Identity />
        <Summary />
        <History />
      </main>
    </>
  );
};

export default Resume;
