import React from 'react';
import { useProfileAPI } from '../../store/profileContext';

const Identity = () => {
  const { profile } = useProfileAPI();

  return (
    <section className="identity text-center mb-7">
      <div>
        <h1 className="name display-1 text-uppercase mb-4">{profile.name}</h1>
        <div className="role h4 text-uppercase">{profile.role}</div>
      </div>
    </section>
  );
};

export default Identity;
