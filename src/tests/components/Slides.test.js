import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, vespas } from '../helpers/index';
import Slides from '../../components/Slides';

const setup = () => {
  const component = shallow(<Slides vespas={vespas} activeIndices={[0, 1]} />);
  return component;
};

describe('Slide Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.Slides');
    expect(wrapper.length).toEqual(1);
  });
});
