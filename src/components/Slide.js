import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import CarouselStyles from '../scss/carousel.module.scss';
import SocialLinks from './SocialLinks';
import { vespaLinks } from '../utils/index';

const Slide = ({ vespa, index }) => (
  <section className={CarouselStyles.Slide}>
    <NavLink
      to={`/Vespa/${index}`}
      className={CarouselStyles.Active}
      key={`${Math.random()}-${Math.random()}`}
    >
      <h4 className={CarouselStyles.SlideHeader}>{vespa.name}</h4>
      <img src={vespa.imageUrl} alt="" className={CarouselStyles.Image} />
      <p className={CarouselStyles.SlideText}>{vespa.description}</p>
    </NavLink>
    <div className={CarouselStyles.SocialLinks}>
      <SocialLinks links={vespaLinks} />
    </div>
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
