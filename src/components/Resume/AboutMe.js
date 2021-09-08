import React from 'react';
import { useProfileAPI } from '../../store/profileContext';

const AboutMe = () => {
  const { profile } = useProfileAPI();

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
