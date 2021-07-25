import React from 'react';
import { usePortfolioAPI } from '../../../store/portfolioContext';

const AboutMe = () => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <div className="mb-4">
        <h5>ABOUT ME</h5>
        <p className="mb-0">{profile.summary}</p>
      </div>
    </>
  );
};

export default AboutMe;
