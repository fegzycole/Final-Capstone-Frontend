import React from 'react';
import PropTypes from 'prop-types';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import CarouselStyles from '../scss/carousel.module.scss';
import Slide from './Slide';

const Carousel = ({
  activeIndex, handleLeftClick, handleRightClick, vespas,
}) => (
  <div className={CarouselStyles.Carousel}>
    <LeftArrow handleClick={handleLeftClick} />
    <Slide activeIndex={activeIndex} vespas={vespas} />
    <RightArrow handleClick={handleRightClick} />
  </div>
);

Carousel.propTypes = {
  activeIndex: PropTypes.number,
  handleLeftClick: PropTypes.func.isRequired,
  handleRightClick: PropTypes.func.isRequired,
  vespas: PropTypes.instanceOf(Array),
};

Carousel.defaultProps = {
  activeIndex: 0,
  vespas: [],
};

export default Carousel;
