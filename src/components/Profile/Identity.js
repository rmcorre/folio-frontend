import React from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

const Identity = () => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <h1 className="visually-hidden">Identity</h1>
      <div className="mb-3">
        <div className="h2 fs-2 mb-1">{profile.name.toUpperCase()}</div>
        <div className="h6 text-muted m-0">{profile.role}</div>
      </div>
    </>
  );
};

export default Identity;
