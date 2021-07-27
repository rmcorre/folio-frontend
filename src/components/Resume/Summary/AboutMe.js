import React from 'react';
import { usePortfolioAPI } from '../../../store/portfolioContext';

const AboutMe = () => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <div>
        <h5>ABOUT ME</h5>
        <p>{profile.summary}</p>
      </div>
    </>
  );
};

export default AboutMe;
