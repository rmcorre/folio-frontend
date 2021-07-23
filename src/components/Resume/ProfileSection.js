import React from 'react';

import Identity from '@Identity';
import Contact from '@Contact';
import Avatar from '@Avatar';

const ProfileSection = (props) => {
  return (
    <section className="p-4">
      <Identity />
      <div className="d-flex justify-content-between align-items-center">
        <Contact />
      </div>
    </section>
  );
};

export default ProfileSection;
