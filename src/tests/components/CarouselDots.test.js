import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, vespas } from '../helpers/index';
import CarouselDots from '../../components/CarouselDots';

const setup = () => {
  const component = shallow(
    <CarouselDots vespas={vespas} activeIndices={[0, 1]} activeIndex={0} />,
  );
  return component;
};

describe('CarouselDots Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.CarouselDots');
    const active = findByTestAttribute(component, '.ActiveDot');
    const passive = findByTestAttribute(component, '.PassiveDot');
    expect(wrapper.length).toEqual(1);
    expect(active.length).toEqual(1);
    expect(passive.length).toEqual(1);
  });
});
