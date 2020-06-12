import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import CarouselStyles from '../scss/carousel.module.scss';

const Slide = ({ vespas, activeIndex }) => (
  <section className={CarouselStyles.Slide}>
    {vespas.map((vespa, idx) => (
      <NavLink
        to={`/VespaList/${idx}`}
        className={
          idx === activeIndex ? CarouselStyles.Active : CarouselStyles.Inactive
        }
        key={`${Math.random()}-${Math.random()}`}
      >
        <h4 className={CarouselStyles.SlideHeader}>{vespa.name}</h4>
        <img src={vespa.imageUrl} alt="" className={CarouselStyles.Image} />
        <p className={CarouselStyles.SlideText}>{vespa.description}</p>
      </NavLink>
    ))}
  </section>
);

Slide.propTypes = {
  vespas: PropTypes.instanceOf(Array),
  activeIndex: PropTypes.number,
};

Slide.defaultProps = {
  vespas: [],
  activeIndex: 0,
};

export default Slide;
