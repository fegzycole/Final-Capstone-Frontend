import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import Container from '../../containers/Container';

const setup = () => {
  const component = shallow(<Container.WrappedComponent><p>Hello</p></Container.WrappedComponent>);
  return component;
};

describe('Container', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.Container');
    expect(wrapper.length).toEqual(1);
  });
});
