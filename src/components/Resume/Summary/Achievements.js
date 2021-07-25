import React from 'react';
import { usePortfolioAPI } from '../../../store/portfolioContext';

const Summary = () => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <div className="mb-4">
        <h5>ACHIEVEMENTS</h5>
        <p className="mb-0">{profile.summary}</p>
      </div>
    </>
  );
};

export default Summary;
