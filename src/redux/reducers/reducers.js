import { actions } from '../actions/index';

const { ADD_VESPAS, ADD_APPOINTMENTS, CLICK_HAM } = actions;

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

export const hamReducer = (state = false, { type }) => {
  switch (type) {
    case CLICK_HAM:
      return !state;
    default:
      return state;
  }
};
