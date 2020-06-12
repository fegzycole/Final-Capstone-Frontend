import React from 'react';
import CarouselStyles from '../scss/carousel.module.scss';

const RightArrow = () => (
  <div className={CarouselStyles.RightArrowContainer}>
    <div className={CarouselStyles.RightArrow}>
      <div className={CarouselStyles.RightArrowSmaller} />
    </div>
  </div>
);

export default RightArrow;
