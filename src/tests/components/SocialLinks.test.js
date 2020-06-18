import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, sideBarLinks } from '../helpers/index';
import SocialLinks from '../../components/SocialLinks';

const setup = () => {
  const component = shallow(<SocialLinks links={sideBarLinks} />);
  return component;
};

describe('SocialLinks Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.SideBarLinks');
    expect(wrapper.length).toEqual(1);
  });
});
