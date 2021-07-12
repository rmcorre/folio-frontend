import React, { useState, useRef, useEffect } from 'react';
import Shuffle from 'shufflejs';
import ShufflePhotoItem from './ShufflePhotoItem';

import apologeticRobot from '../img/around/portfolio/01.jpg';
import womanWalking from '../img/around/portfolio/02.jpg';
import oilBottle from '../img/around/portfolio/03.jpg';
import smilingWoman from '../img/around/portfolio/04.jpg';
import drink from '../img/around/portfolio/05.jpg';
import love from '../img/around/portfolio/06.jpg';

const photosArray = [
  {
    id: 1,
    username: '@apologeticRobot',
    name: 'Apologetic Robot',
    category: 'Branding',
    src: apologeticRobot,
    dataGroup: 'branding',
  },
  {
    id: 2,
    username: '@womanWalking',
    name: 'Woman Walking',
    category: 'Illustrations',
    src: womanWalking,
    dataGroup: 'illustrations',
  },
  {
    id: 3,
    username: '@oilBottle',
    name: 'Oil Bottle',
    category: 'Branding',
    src: oilBottle,
    dataGroup: 'branding',
  },
  {
    id: 4,
    username: '@smilingWoman',
    name: 'Smiling Woman',
    category: 'Illustrations',
    src: smilingWoman,
    dataGroup: 'illustrations',
  },
  {
    id: 5,
    username: '@drink',
    name: 'Drink',
    category: 'Packaging',
    src: drink,
    dataGroup: 'packaging',
  },
  {
    id: 6,
    username: '@love',
    name: 'Love',
    category: 'Illustrations',
    src: love,
    dataGroup: 'illustations',
  },
];

const ShuffleGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [shuffle, setShuffle] = useState(null);
  const element = useRef();
  // const sizer = useRef();

  const handleFilterClick = (evt) => {
    evt.preventDefault();
    var btn = evt.currentTarget;
  };

  useEffect(() => {
    // The elements are in the DOM, initialize a shuffle instance.
    setPhotos(photosArray);
    setShuffle(
      new Shuffle(element.current, {
        itemSelector: '.masonry-grid-item',
        sizer: '.masonry-grid-item',
      })
    );

    return () => {
      shuffle.destroy();
      shuffle = null;
    };
  }, []);

  return (
    <>
      {/* Portfolio grid */}
      <div ref={element} className="masonry-grid" data-columns="3">
        {/* Portfolio items */}
        {photos.map((photo) => (
          <ShufflePhotoItem {...photo} />
        ))}
      </div>
    </>
  );
};

export default ShuffleGrid;
