import React from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

const Identity = () => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <h1 className="visually-hidden">Identity</h1>
      <div className="mb-4">
        <div className="h3 text-white fs-2 mb-1">{profile.name}</div>
        <div className="h6 text-white m-0">{profile.role}</div>
      </div>
    </>
  );
};

export default Identity;
