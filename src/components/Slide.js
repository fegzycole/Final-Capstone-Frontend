import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import CarouselStyles from '../scss/carousel.module.scss';

const Slide = ({ vespa, index }) => (
  <section className={CarouselStyles.Slide}>
    <NavLink
      to={`/VespaList/${index}`}
      className={CarouselStyles.Active}
      key={`${Math.random()}-${Math.random()}`}
    >
      <h4 className={CarouselStyles.SlideHeader}>{vespa.name}</h4>
      <img src={vespa.imageUrl} alt="" className={CarouselStyles.Image} />
      <p className={CarouselStyles.SlideText}>{vespa.description}</p>
    </NavLink>
  </section>
);

Slide.propTypes = {
  vespa: PropTypes.instanceOf(Object),
  index: PropTypes.number.isRequired,
};

Slide.defaultProps = {
  vespa: {},
};

export default Slide;
