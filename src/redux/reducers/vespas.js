import { actions } from '../actions/index';

const { ADD_VESPAS, ADD_APPOINTMENTS } = actions;

export const vespaReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_VESPAS:
      return payload;
    default:
      return state;
  }
};

export const appointmentsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_APPOINTMENTS:
      return payload;
    default:
      return state;
  }
};
