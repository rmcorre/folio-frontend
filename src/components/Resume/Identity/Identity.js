import React from 'react';
import { usePortfolioAPI } from '../../../store/portfolioContext';

const Identity = () => {
  const { profile } = usePortfolioAPI();

  return (
    <section className="identity">
      <h1 className="name display-1 text-uppercase mb-4">{profile.name}</h1>
      <div className="role h4 text-uppercase">{profile.role}</div>
    </section>
  );
};

export default Identity;
