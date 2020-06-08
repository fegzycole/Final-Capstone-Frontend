import { actions } from '../actions/index';

const { ADD_VESPAS } = actions;

const vespaReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_VESPAS:
      return payload;
    default:
      return state;
  }
};

export default vespaReducer;
