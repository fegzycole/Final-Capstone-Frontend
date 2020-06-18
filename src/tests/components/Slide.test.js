import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, vespas } from '../helpers/index';
import Slide from '../../components/Slide';

const setup = () => {
  const component = shallow(<Slide vespa={vespas[0]} index={0} />);
  return component;
};

describe('Slide Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.Slide');
    expect(wrapper.length).toEqual(1);
  });
});
