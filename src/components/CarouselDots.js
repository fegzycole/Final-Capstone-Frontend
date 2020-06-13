import React from 'react';
import PropTypes from 'prop-types';
import CarouselStyles from '../scss/carousel.module.scss';

const CarouselDots = ({ vespas, activeIndex }) => (
  <ul className={CarouselStyles.CarouselDots}>
    {vespas.map((vespa, idx) => (
      <li
        key={`${Math.random}-${Math.random()}`}
        className={
          idx === activeIndex
            ? CarouselStyles.ActiveDot
            : CarouselStyles.PassiveDot
        }
        id={idx}
      />
    ))}
  </ul>
);

CarouselDots.propTypes = {
  vespas: PropTypes.instanceOf(Array).isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default CarouselDots;
