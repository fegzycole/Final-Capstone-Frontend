import React from 'react';
import PropTypes from 'prop-types';
import CarouselStyles from '../scss/carousel.module.scss';

const LeftArrow = ({ handleClick }) => (
  <div
    className={CarouselStyles.LeftArrowContainer}
    onClick={handleClick}
    role="button"
    onKeyPress={handleClick}
    tabIndex={0}
  >
    <div className={CarouselStyles.LeftArrow}>
      <div className={CarouselStyles.LeftArrowSmaller} />
    </div>
  </div>
);

LeftArrow.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default LeftArrow;
