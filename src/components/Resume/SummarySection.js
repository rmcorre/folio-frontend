import React, { useState } from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

const SummarySection = () => {
  const { profile } = usePortfolioAPI();

  return (
    <>
      <section className="font-small p-4">
        <h5 className="text-muted">ABOUT ME</h5>
        <p className="mb-0">{profile.summary}</p>
      </section>
    </>
  );
};

export default SummarySection;
