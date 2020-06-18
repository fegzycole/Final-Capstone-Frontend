import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import OverLay from '../../components/Overlay';

const setup = () => {
  const component = shallow(<OverLay />);
  return component;
};

describe('Overlay Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.Overlay');
    expect(wrapper.length).toEqual(1);
  });
});
