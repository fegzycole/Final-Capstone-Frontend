import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import Header from '../../components/Header';

const setup = () => {
  const component = shallow(<Header />);
  return component;
};

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.Header');
    expect(wrapper.length).toEqual(1);
  });
});
