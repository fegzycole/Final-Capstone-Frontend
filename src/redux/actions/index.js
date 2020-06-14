export const actions = {
  ADD_VESPAS: 'VESPAS',
  ADD_APPOINTMENTS: 'ADD_APPOINTMENTS',
};

export const addVespas = vespas => ({
  type: actions.ADD_VESPAS,
  payload: vespas,
});

export const addAppointments = payload => ({
  type: actions.ADD_APPOINTMENTS,
  payload,
});
