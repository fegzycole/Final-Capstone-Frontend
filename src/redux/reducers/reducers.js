import { actions } from '../actions/index';

const {
  ADD_VESPAS,
  ADD_APPOINTMENTS,
  CLICK_HAM,
  ADD_SIGNUPERRORS,
  ADD_SIGNINERRORS,
  ADD_BOOKING_ERRORS,
  TOGGLE_SPINNER,
} = actions;

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

export const signupReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_SIGNUPERRORS:
      return payload;
    default:
      return state;
  }
};

export const signinReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ADD_SIGNINERRORS:
      return payload;
    default:
      return state;
  }
};

export const bookingReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ADD_BOOKING_ERRORS:
      return payload;
    default:
      return state;
  }
};

export const spinnerReducer = (state = false, { type }) => {
  switch (type) {
    case TOGGLE_SPINNER:
      return !state;
    default:
      return state;
  }
};
