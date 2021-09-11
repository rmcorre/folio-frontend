import React, { useState, useEffect, useRef } from 'react';
import ShuffleItem from './ShuffleItem';
import Shuffle from 'shufflejs';

import folioFrontend from '../../img/portfolio/folioFrontend.svg';
import folioBackend from '../../img/portfolio/folioBackend.svg';
import react from '../../img/portfolio/react.svg';
import placeholder from '../../img/portfolio/placeholder.svg';

const projectsArray = [
  {
    key: 1,
    username: '@folioFrontend',
    name: 'Folio',
    category: 'Front End',
    src: folioFrontend,
    href: 'https://github.com/rmcorre/folio-frontend',
    dataGroup: 'frontEnd',
  },
  {
    key: 2,
    username: '@folioBackend',
    name: 'Folio',
    category: 'Back End',
    src: folioBackend,
    href: 'https://github.com/rmcorre/folio-backend',
    dataGroup: 'backEnd',
  },
  {
    key: 3,
    username: '@react',
    name: 'React Course Projects',
    category: 'Front End',
    src: react,
    href: 'https://github.com/rmcorre/react-the-complete-guide-projects',
    dataGroup: 'react',
  },
  {
    key: 4,
    username: '@placeholder4',
    name: 'Place Holder',
    category: 'Front End',
    src: placeholder,
    dataGroup: 'frontEnd',
  },
  {
    key: 5,
    username: '@placeholder5',
    name: 'Place Holder',
    category: 'Back End',
    src: placeholder,
    dataGroup: 'backEnd',
  },
  {
    key: 6,
    username: '@placeholder6',
    name: 'Place Holder',
    category: 'React',
    src: placeholder,
    dataGroup: 'react',
  },
];

const ShuffleGrid = () => {
  const [projects, setProjects] = useState([]);
  const element = useRef();
  const sizer = useRef();

  // When the ShuffleGrid component first mounts
  // add the ShufflePhotoItem markup without photos being
  // set by useState because a Shuffle instance hasn't been initialized
  // yet in the PortfolioAround component and the grid appears broken.

  // The useEffect hook is called once after the component mounts
  // and the Shuffle instance in PortfolioAround has been
  // initialized. Now it is safe to show the photos with setPhotos.

  useEffect(() => {
    let shuffle = null;
    setProjects(projectsArray);
    shuffle = new Shuffle(element.current, {
      itemSelector: 'masonry-grid',
      sizer: sizer.current,
    });
  }, []);

  return (
    <div ref={element} className="masonry-grid" data-columns="3">
      {projects.map((project) => (
        <ShuffleItem useRef={sizer} {...project} />
      ))}
    </div>
  );
};

export default ShuffleGrid;
