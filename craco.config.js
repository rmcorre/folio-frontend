const path = require('path');

const resolve = (relativePath) => {
  return path.resolve(__dirname, relativePath);
};

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@SiteNavbar': resolve('src/components/UI/Navbar/SiteNavbar.js'),
      '@grid': path.resolve(__dirname, 'src/components/Grid'),
      '@hero': path.resolve(__dirname, 'src/components/Hero'),
      '@Identity': resolve('src/components/Profile/Identity.js'),
      '@Avatar': resolve('src/components/Resume/Avatar.js'),
      '@Contact': resolve('src/components/Profile/Contact.js'),
      '@ProfileSection': resolve('src/components/Resume/ProfileSection.js'),
      '@SummarySection': resolve('src/components/Resume/SummarySection'),
      '@EducationSection': resolve('src/components/Resume/EducationSection.js'),
      '@ExperienceSection': resolve(
        'src/components/Resume/ExperienceSection.js'
      ),
      '@SkillSetSection': resolve('src/components/Resume/SkillSetSection.js'),
      '@Concept': resolve('src/components/Profile/Concept/Concept.js'),
      '@Tech': resolve('src/components/Profile/Tech/Tech.js'),
      '@Framework': resolve('src/components/Profile/Framework/Framework.js'),
      '@Tool': resolve('src/components/Profile/Tool/Tool.js'),
    },
  },
};
