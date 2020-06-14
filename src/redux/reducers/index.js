import { combineReducers } from 'redux';
import { vespaReducer, appointmentsReducer } from './vespas';

export default combineReducers({
  vespas: vespaReducer,
  appointments: appointmentsReducer,
});
