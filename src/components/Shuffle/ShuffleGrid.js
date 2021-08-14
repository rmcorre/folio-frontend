import React, { useState, useEffect } from 'react';
import ShuffleItem from './ShuffleItem';

// import apologeticRobot from '../../img/portfolio/01.jpg';
// import womanWalking from '../../img/portfolio/02.jpg';
// import oilBottle from '../../img/portfolio/03.jpg';
import folioFrontend from '../../img/portfolio/folioFrontend.svg';
import folioBackend from '../../img/portfolio/folioBackend.svg';
import react from '../../img/portfolio/react.svg';
import smilingWoman from '../../img/portfolio/04.jpg';
import drink from '../../img/portfolio/05.jpg';
import love from '../../img/portfolio/06.jpg';

const photosArray = [
  {
    key: 1,
    username: '@folioFrontend',
    name: 'Front-end for this portfolio project',
    category: 'Front-end',
    src: folioFrontend,
    href: 'https://github.com/rmcorre/folio-frontend',
    dataGroup: 'front-end',
  },
  {
    key: 2,
    username: '@folioBackend',
    name: 'Back-end for this portfolio project',
    category: 'Back-end',
    src: folioBackend,
    href: 'https://github.com/rmcorre/folio-backend',
    dataGroup: 'back-end',
  },
  {
    key: 3,
    username: '@react',
    name: 'React - The Complete Guide Projects',
    category: 'Front-end',
    src: react,
    dataGroup: 'front-end',
  },
  {
    key: 4,
    username: '@smilingWoman',
    name: 'Smiling Woman',
    category: 'Illustrations',
    src: smilingWoman,
    dataGroup: 'illustrations',
  },
  {
    key: 5,
    username: '@drink',
    name: 'Drink',
    category: 'Packaging',
    src: drink,
    dataGroup: 'packaging',
  },
  {
    key: 6,
    username: '@love',
    name: 'Love',
    category: 'Illustrations',
    src: love,
    dataGroup: 'illustrations',
  },
];

const ShuffleGrid = () => {
  const [photos, setPhotos] = useState([]);

  // When the ShuffleGrid component first mounts
  // add the ShufflePhotoItem markup without photos being
  // set by useState because a Shuffle instance hasn't been initialized
  // yet in the PortfolioAround component and the grid appears broken.

  // The useEffect hook is called once after the component mounts
  // and the Shuffle instance in PortfolioAround has been
  // initialized. Now it is safe to show the photos with setPhotos.

  useEffect(() => {
    setPhotos(photosArray);
  }, []);

  return (
    <div className="masonry-grid" data-columns="3">
      {photos.map((photo) => (
        <ShuffleItem {...photo} />
      ))}
    </div>
  );
};

export default ShuffleGrid;
