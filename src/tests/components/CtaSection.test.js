import React from 'react';
import { shallow } from 'enzyme';
import CtaSection from '../../components/CtaSection';
import { findByTestAttribute } from '../helpers/index';

const setup = () => {
  const component = shallow(<CtaSection />);
  return component;
};

describe('CtaSection Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.CtaSection');
    expect(wrapper.length).toEqual(1);
  });
});
