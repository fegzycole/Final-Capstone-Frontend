export const actions = {
  ADD_VESPAS: 'VESPAS',
};

export const addVespas = vespas => ({
  type: actions.ADD_VESPAS,
  payload: vespas,
});
