import React from 'react';
import { usePortfolioAPI } from '../../store/portfolioContext';

const Contact = () => {
  const { profile } = usePortfolioAPI();

  return (
    <address>
      {profile.email} <br />
      {profile.phoneNumber} <br />
      {profile.location} <br />
    </address>
  );
};

export default Contact;
