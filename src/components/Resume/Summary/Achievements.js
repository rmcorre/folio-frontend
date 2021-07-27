import React from 'react';
import { usePortfolioAPI } from '../../../store/portfolioContext';

const Summary = () => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <div>
        <h5>ACHIEVEMENTS</h5>
        <p>{profile.summary}</p>
      </div>
    </>
  );
};

export default Summary;
