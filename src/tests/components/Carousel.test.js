import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../../components/Carousel';
import { findByTestAttribute } from '../helpers/index';

const setup = () => {
  const component = shallow(<Carousel />);
  return component;
};

describe('Carousel Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.Carousel');
    expect(wrapper.length).toEqual(1);
  });
});
