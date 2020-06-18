import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import FormArea from '../../components/FormArea';

const setup = () => {
  const component = shallow(
    <FormArea
      labelFor="email"
      type="email"
      labelText="Email"
      name="email"
      value=""
      placeholder="Enter Email"
      id="email"
    />,
  );
  return component;
};

describe('FormArea Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.FormArea');
    expect(wrapper.length).toEqual(1);
  });
});
