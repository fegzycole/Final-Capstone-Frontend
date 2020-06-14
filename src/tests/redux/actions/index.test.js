import { addAppointments, addVespas, clickHam } from '../../../redux/actions/index';
import { appointments, vespas } from '../../helpers/index';

describe('addApointments', () => {
  it('should return an object containing a type and a payload containing the list of appointments', () => {
    const values = Object.values(addAppointments(appointments));

    expect(values).toEqual(['ADD_APPOINTMENTS', appointments]);
  });
});

describe('addVespas', () => {
  it('should return an object containing a type and a payload containing the list of vespas', () => {
    const values = Object.values(addVespas(vespas));

    expect(values).toEqual(['VESPAS', vespas]);
  });
});

describe('clickHam', () => {
  it('should return an object containing a type that toggles the hamburger\'s clicked status', () => {
    const values = Object.values(clickHam());

    expect(values).toEqual(['CLICK_HAM']);
  });
});
