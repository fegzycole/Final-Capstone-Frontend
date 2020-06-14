export const actions = {
  ADD_VESPAS: 'VESPAS',
  ADD_APPOINTMENTS: 'ADD_APPOINTMENTS',
  CLICK_HAM: 'CLICK_HAM',
};

export const addVespas = vespas => ({
  type: actions.ADD_VESPAS,
  payload: vespas,
});

export const addAppointments = payload => ({
  type: actions.ADD_APPOINTMENTS,
  payload,
});

export const clickHam = () => ({
  type: actions.CLICK_HAM,
});
