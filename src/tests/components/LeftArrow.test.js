import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import CarouselStyles from '../../scss/carousel.module.scss';

import Arrow from '../../components/Arrow';

const setup = () => {
  const component = shallow(<Arrow
    classOne={CarouselStyles.LeftArrowContainer}
    classTwo={CarouselStyles.LeftArrow}
    classThree={CarouselStyles.LeftArrowSmaller}
  />);
  return component;
};

describe('Arrow Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.LeftArrowContainer');
    expect(wrapper.length).toEqual(1);
  });
});
