import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import Hamburger from '../../components/Hamburger';

const setup = () => {
  const component = shallow(<Hamburger />);
  return component;
};

describe('Hamburger Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.Ham');
    expect(wrapper.length).toEqual(1);
  });
});
