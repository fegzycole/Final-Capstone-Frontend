import React from 'react';
import PropTypes from 'prop-types';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import CarouselStyles from '../scss/carousel.module.scss';
import Slides from './Slides';

const Carousel = ({
  activeIndices, handleLeftClick, handleRightClick, vespas,
}) => (
  <div className={CarouselStyles.Carousel}>
    <LeftArrow handleClick={handleLeftClick} />
    <Slides activeIndices={activeIndices} vespas={vespas} />
    <RightArrow handleClick={handleRightClick} />
  </div>
);

Carousel.propTypes = {
  activeIndices: PropTypes.instanceOf(Array),
  handleLeftClick: PropTypes.func,
  handleRightClick: PropTypes.func,
  vespas: PropTypes.instanceOf(Array),
};

Carousel.defaultProps = {
  activeIndices: [],
  vespas: [],
  handleLeftClick: () => null,
  handleRightClick: () => null,
};

export default Carousel;
