import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../helpers/index';
import ConfirmationMessage from '../../components/ConfirmationMessage';

const setup = () => {
  const component = shallow(
    <ConfirmationMessage />,
  );
  return component;
};

describe('CarouselDots Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.ConfirmText');
    expect(wrapper.length).toEqual(1);
  });
});
