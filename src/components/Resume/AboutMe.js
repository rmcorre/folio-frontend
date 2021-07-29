import React from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

const AboutMe = () => {
  const { profile } = usePortfolioAPI();

  return (
    <section className="about-me mb-5">
      <div>
        <h5 className="text-uppercase">About me</h5>
        <p>{profile.summary}</p>
      </div>
    </section>
  );
};

export default AboutMe;
