import React from 'react';
import { usePortfolioAPI } from '../../../store/portfolioContext';

const Identity = () => {
  const { profile } = usePortfolioAPI();

  return (
    <section className="identity">
      <div className="container text-center mb-7">
        <div className="row">
          <h1 className="name display-1 text-uppercase mb-4">{profile.name}</h1>
          <div className="role h4 text-uppercase">{profile.role}</div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
