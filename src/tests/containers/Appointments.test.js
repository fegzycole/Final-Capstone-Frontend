import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, vespas, appointments } from '../helpers/index';
import Appointments from '../../containers/Appointments';

const setup = () => {
  const component = shallow(
    <Appointments.WrappedComponent
      vespas={vespas}
      appointments={appointments}
    />,
  );
  return component;
};

describe('VespaList Container', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, '.BigContainer');
    expect(wrapper.length).toEqual(1);
  });
});
