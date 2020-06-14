import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import FormModal from '../../components/FormModal';

const setup = () => {
  const component = shallow(
    <FormModal
      city="Lagos"
      date="Fri, 26 Jun 2020"
      time="20:00:00"
      email="fergusoniyara@gmail.com"
      name="Some Vespa"
    />,
  );
  return component;
};

describe('FormModal Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.OverLay');
    expect(wrapper.length).toEqual(1);
  });
});
