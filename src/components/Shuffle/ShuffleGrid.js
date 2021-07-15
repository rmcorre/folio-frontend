import React, { useState, useEffect } from 'react';
import ShuffleItem from './ShuffleItem';

import apologeticRobot from '../../img/around/portfolio/01.jpg';
import womanWalking from '../../img/around/portfolio/02.jpg';
import oilBottle from '../../img/around/portfolio/03.jpg';
import smilingWoman from '../../img/around/portfolio/04.jpg';
import drink from '../../img/around/portfolio/05.jpg';
import love from '../../img/around/portfolio/06.jpg';

const photosArray = [
  {
    key: 1,
    username: '@apologeticRobot',
    name: 'Apologetic Robot',
    category: 'Branding',
    src: apologeticRobot,
    dataGroup: 'branding',
  },
  {
    key: 2,
    username: '@womanWalking',
    name: 'Woman Walking',
    category: 'Illustrations',
    src: womanWalking,
    dataGroup: 'illustrations',
  },
  {
    key: 3,
    username: '@oilBottle',
    name: 'Oil Bottle',
    category: 'Branding',
    src: oilBottle,
    dataGroup: 'branding',
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
