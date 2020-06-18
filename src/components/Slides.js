import React from 'react';
import PropTypes from 'prop-types';
import CarouselStyles from '../scss/carousel.module.scss';
import Slide from './Slide';
import CarouselDots from './CarouselDots';

const Slides = ({ vespas, activeIndices }) => (
  <div className={CarouselStyles.Slides}>
    <div className={CarouselStyles.SlidesSection}>
      <h2 className={CarouselStyles.SlideBigHeader}>Latest Vespas</h2>
      <p className={CarouselStyles.SlideBigText}>Select A Vespa To Book An Appointment</p>

      <CarouselDots vespas={vespas} activeIndex={activeIndices[0]} />

      <div className={CarouselStyles.SlideItems}>
        {activeIndices.map(index => (
          <Slide
            vespa={vespas[index]}
            key={`${Math.random()}-${Math.random()}`}
            index={index}
          />
        ))}
      </div>
    </div>
  </div>
);

Slides.propTypes = {
  vespas: PropTypes.instanceOf(Array),
  activeIndices: PropTypes.instanceOf(Array),
};

Slides.defaultProps = {
  vespas: [],
  activeIndices: [],
};

export default Slides;
