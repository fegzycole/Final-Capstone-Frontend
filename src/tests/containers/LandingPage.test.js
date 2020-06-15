import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import LandingPage from '../../containers/LandingPage';

const setup = () => {
  const component = shallow(<LandingPage />);
  return component;
};

describe('LandingPage Container', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.LandingPage');
    expect(wrapper.length).toEqual(1);
  });
});
