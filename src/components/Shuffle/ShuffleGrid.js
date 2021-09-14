import React, { useState, useEffect, useRef } from 'react';
import Shuffle from 'shufflejs';
import ShuffleFilter from './ShuffleFilter';
import ShuffleItem from './ShuffleItem';

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
    category: 'React',
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
  const [projects] = useState(projectsArray);
  const [shuffle, setShuffle] = useState(null);
  const grid = useRef();

  useEffect(() => {
    setShuffle(
      new Shuffle(grid.current, {
        itemSelector: '.masonry-grid-item',
        sizer: '.masonry-grid-item',
      })
    );
  }, []);

  const projectList = projects.map((project) => <ShuffleItem {...project} />);

  return (
    <>
      <ShuffleFilter shuffle={shuffle} />
      <div ref={grid} className="masonry-grid" data-columns="3">
        {projectList}
      </div>
    </>
  );
};

export default ShuffleGrid;
