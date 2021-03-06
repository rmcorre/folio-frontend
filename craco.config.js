const path = require('path');
// const glob = require('glob-all');
// const PurgecssPlugin = require('purgecss-webpack-plugin');
const purgecss = require('@fullhuman/postcss-purgecss');

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
      '@Identity': resolve('src/components/Resume/Identity/Identity.js'),
      '@Avatar': resolve('src/components/Resume/Avatar.js'),
      '@Contact': resolve('src/components/Profile/Contact.js'),
      '@Profile': resolve('src/components/Resume/Profile.js'),
      '@Summary': resolve('src/components/Resume/Summary/Summary'),
      '@AboutMe': resolve('src/components/Resume/Summary/AboutMe'),
      '@Achievements': resolve('src/components/Resume/Summary/Achievements'),
      '@Background': resolve('src/components/Resume/Background/Background.js'),
      '@EducationList': resolve(
        'src/components/Resume/Background/EducationList.js'
      ),
      '@EmploymentList': resolve(
        'src/components/Resume/Background/EmploymentList.js'
      ),
      '@Employer': resolve('src/components/Profile/Experiences/Employer.js'),
      '@Concept': resolve('src/components/Profile/Skill/Concept/Concept.js'),
      '@Framework': resolve(
        'src/components/Profile/Skill/Framework/Framework.js'
      ),
      '@Tech': resolve('src/components/Profile/Skill/Tech/Tech.js'),
      '@Tool': resolve('src/components/Profile/Skill/Tool/Tool.js'),
      '@Skill': resolve('src/components/Resume/Detail/Skill.js'),
      '@Detail': resolve('src/components/Resume/Detail/Detail.js'),
    },
    style: {
      postcss: {
        plugins: [
          purgecss({
            content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
          }),
        ],
      },
    },
  },
};
