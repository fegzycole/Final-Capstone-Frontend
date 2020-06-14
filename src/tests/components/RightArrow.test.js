import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import RightArrow from '../../components/RightArrow';

const setup = () => {
  const component = shallow(<RightArrow />);
  return component;
};

describe('RightArrow Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.RightArrowContainer');
    expect(wrapper.length).toEqual(1);
  });
});
