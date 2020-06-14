import { addVespas, addAppointments, clickHam } from '../../../redux/actions/index';
import { vespaReducer, appointmentsReducer, hamReducer } from '../../../redux/reducers/reducers';
import { vespas, appointments } from '../../helpers/index';

describe('Vespas Reducer', () => {
  it('should return default state', () => {
    const newState = vespaReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return new state if it receives a valid type and payload', () => {
    const action = addVespas(vespas);
    const newState = vespaReducer(undefined, action);
    expect(newState).toEqual(vespas);
  });
});

describe('Appointments Reducer', () => {
  it('should return default state', () => {
    const newState = appointmentsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return new state if it receives a valid type and payload', () => {
    const action = addAppointments(appointments);
    const newState = appointmentsReducer(undefined, action);
    expect(newState).toEqual(appointments);
  });
});

describe('Hamburger Reducer', () => {
  it('should return default state', () => {
    const newState = hamReducer(undefined, {});
    expect(newState).toEqual(false);
  });

  it('should return new state if it receives a valid type', () => {
    const action = clickHam();
    const newState = hamReducer(undefined, action);
    expect(newState).toEqual(true);
  });
});
