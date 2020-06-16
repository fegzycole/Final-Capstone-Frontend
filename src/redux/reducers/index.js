import { combineReducers } from 'redux';
import {
  vespaReducer,
  appointmentsReducer,
  hamReducer,
  signupReducer,
  signinReducer,
  bookingReducer,
  spinnerReducer,
} from './reducers';

export default combineReducers({
  vespas: vespaReducer,
  appointments: appointmentsReducer,
  hamClicked: hamReducer,
  signupErrors: signupReducer,
  signinError: signinReducer,
  bookingError: bookingReducer,
  showSpinner: spinnerReducer,
});
