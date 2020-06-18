import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, sideBarLinks } from '../helpers/index';
import SideBar from '../../components/SideBar';

const setup = () => {
  const component = shallow(<SideBar.WrappedComponent links={sideBarLinks} />);
  return component;
};

describe('SideBar Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.SideBar');
    expect(wrapper.length).toEqual(1);
  });
});
