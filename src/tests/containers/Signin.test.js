import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import Signin from '../../containers/Signin';

const setup = () => {
  const component = shallow(<Signin.WrappedComponent />);
  return component;
};

describe('Signin Container', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.Signin');
    expect(wrapper.length).toEqual(1);
  });
});
