import React from 'react';
import PropTypes from 'prop-types';
import CarouselStyles from '../scss/carousel.module.scss';
import Slide from './Slide';

const Slides = ({ vespas, activeIndices }) => (
  <div className={CarouselStyles.Slides}>
    {activeIndices.map(index => (
      <Slide
        vespa={vespas[index]}
        key={`${Math.random()}-${Math.random()}`}
        index={index}
      />
    ))}
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
