import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import Signup from '../../containers/Signup';

const setup = () => {
  const component = shallow(<Signup.WrappedComponent />);
  return component;
};

describe('Signup Container', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.Signup');
    expect(wrapper.length).toEqual(1);
  });
});
