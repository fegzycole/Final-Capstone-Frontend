import React from 'react';
import PropTypes from 'prop-types';
import Arrow from './Arrow';
import CarouselStyles from '../scss/carousel.module.scss';
import Slides from './Slides';

const Carousel = ({
  activeIndices, handleLeftClick, handleRightClick, vespas,
}) => (
  <div className={CarouselStyles.Carousel}>
    <Arrow
      handleClick={handleLeftClick}
      classOne={CarouselStyles.LeftArrowContainer}
      classTwo={CarouselStyles.LeftArrow}
      classThree={CarouselStyles.LeftArrowSmaller}
    />
    <Slides activeIndices={activeIndices} vespas={vespas} />
    <Arrow
      handleClick={handleRightClick}
      classOne={CarouselStyles.RightArrowContainer}
      classTwo={CarouselStyles.RightArrow}
      classThree={CarouselStyles.RightArrowSmaller}
    />
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
