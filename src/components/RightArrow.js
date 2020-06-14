import React from 'react';
import PropTypes from 'prop-types';
import CarouselStyles from '../scss/carousel.module.scss';

const RightArrow = ({ handleClick }) => (
  <div
    className={CarouselStyles.RightArrowContainer}
    onClick={handleClick}
    role="button"
    onKeyPress={handleClick}
    tabIndex={0}
  >
    <div className={CarouselStyles.RightArrow}>
      <div className={CarouselStyles.RightArrowSmaller} />
    </div>
  </div>
);

RightArrow.propTypes = {
  handleClick: PropTypes.func,
};

RightArrow.defaultProps = {
  handleClick: () => null,
};

export default RightArrow;
