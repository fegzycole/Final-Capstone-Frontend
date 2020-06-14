import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import Spinner from '../../components/Spinner';

const setup = () => {
  const component = shallow(<Spinner />);
  return component;
};

describe('Spinner Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.Overlay');
    expect(wrapper.length).toEqual(1);
  });
});
