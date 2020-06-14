import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import LeftArrow from '../../components/LeftArrow';

const setup = () => {
  const component = shallow(<LeftArrow />);
  return component;
};

describe('LeftArrow Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.LeftArrowContainer');
    expect(wrapper.length).toEqual(1);
  });
});
