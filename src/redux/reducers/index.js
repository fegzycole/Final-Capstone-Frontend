import { combineReducers } from 'redux';
import { vespaReducer, appointmentsReducer, hamReducer } from './reducers';

export default combineReducers({
  vespas: vespaReducer,
  appointments: appointmentsReducer,
  hamClicked: hamReducer,
});
