import React from 'react';
import CarouselStyles from '../scss/carousel.module.scss';

const LeftArrow = () => (
  <div className={CarouselStyles.LeftArrowContainer}>
    <div className={CarouselStyles.LeftArrow}>
      <div className={CarouselStyles.LeftArrowSmaller} />
    </div>
  </div>
);

export default LeftArrow;
