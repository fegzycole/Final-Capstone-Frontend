import axios from 'axios';

export const actions = {
  ADD_VESPAS: 'VESPAS',
  ADD_APPOINTMENTS: 'ADD_APPOINTMENTS',
  CLICK_HAM: 'CLICK_HAM',
  ADD_SIGNUPERRORS: 'ADD_SIGNUPERRORS',
  ADD_SIGNINERRORS: 'ADD_SIGNINERRORS',
  ADD_BOOKING_ERRORS: 'ADD_BOOKING_ERRORS',
  TOGGLE_SPINNER: 'TOGGLE_SPINNER',
};

export const addVespas = vespas => ({
  type: actions.ADD_VESPAS,
  payload: vespas,
});

export const addAppointmentsError = error => ({
  type: actions.ADD_BOOKING_ERRORS,
  payload: error,
});

export const addAppointments = payload => ({
  type: actions.ADD_APPOINTMENTS,
  payload,
});

export const clickHam = () => ({
  type: actions.CLICK_HAM,
});

export const addSignUpErrors = errors => ({
  type: actions.ADD_SIGNUPERRORS,
  payload: errors,
});

export const addSignInErrors = error => ({
  type: actions.ADD_SIGNINERRORS,
  payload: error,
});

export const toggleSpinner = () => ({
  type: actions.TOGGLE_SPINNER,
});

export const signup = userData => {
  const {
    firstName, lastName, email, password,
  } = userData;

  return async dispatch => {
    try {
      dispatch(toggleSpinner());

      const { data: { token } } = await axios.post('https://desolate-mountain-07619.herokuapp.com/api/v1/auth/signup', {
        user: {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        },
      });

      localStorage.setItem('token', token);
      localStorage.setItem('email', email);

      dispatch(toggleSpinner());

      return null;
    } catch (error) {
      if (!error.response) {
        return error.message;
      }

      const { response: { data: { errors } } } = error;
      dispatch(addSignUpErrors(errors));
      dispatch(toggleSpinner());
      return null;
    }
  };
};

export const signin = userData => {
  const {
    email, password,
  } = userData;

  return async dispatch => {
    try {
      dispatch(toggleSpinner());
      dispatch(addSignInErrors(null));

      const { data: { token } } = await axios.post('https://desolate-mountain-07619.herokuapp.com/api/v1/auth/signin', {
        email,
        password,
      });

      localStorage.setItem('token', token);
      localStorage.setItem('email', email);

      dispatch(toggleSpinner());

      return null;
    } catch (err) {
      if (!err.response) {
        return err.message;
      }

      const { response: { data: { error } } } = err;
      dispatch(addSignInErrors(error));
      dispatch(toggleSpinner());

      return null;
    }
  };
};

export const getVespas = token => async dispatch => {
  try {
    dispatch(toggleSpinner());

    const {
      data: { automobiles },
    } = await axios.request({
      method: 'GET',
      url:
          'https://desolate-mountain-07619.herokuapp.com/api/v1/automobiles',
      headers: {
        Authorization: token,
      },
    });

    dispatch(addVespas(automobiles));
    dispatch(toggleSpinner());

    return null;
  } catch (err) {
    dispatch(toggleSpinner());
    if (!err.response) {
      return err.message;
    }

    return err.response;
  }
};

export const bookAppointment = appointmentData => {
  const {
    token, date, time, city, vespa,
  } = appointmentData;

  return async dispatch => {
    dispatch(toggleSpinner());

    try {
      const { data: { message } } = await axios.request({
        method: 'POST',
        url: 'https://desolate-mountain-07619.herokuapp.com/api/v1/bookings',
        headers: {
          Authorization: token,
        },
        data: {
          booking: {
            date: `${date} ${time}`,
            city,
            automobile_id: vespa.id,
          },
        },
      });

      dispatch(toggleSpinner());

      return message;
    } catch (error) {
      dispatch(toggleSpinner());
      if (!error.response) {
        return error.message;
      }

      dispatch(addAppointmentsError(error.response.data.error));
      return error.response.data.error;
    }
  };
};

export const getBookings = (vespas, token) => async dispatch => {
  try {
    dispatch(toggleSpinner());

    const {
      data: { bookings },
    } = await axios.request({
      method: 'GET',
      url: 'https://desolate-mountain-07619.herokuapp.com/api/v1/bookings',
      headers: {
        Authorization: token,
      },
    });

    const data = bookings.map(booking => {
      const vespa = vespas.find(vespa => vespa.id === booking.automobile_id);
      let currentDate = new Date(booking.date);
      currentDate = currentDate.toGMTString().split(' G');

      return {
        name: vespa.name,
        city: booking.city,
        date: currentDate[0],
      };
    });

    dispatch(addAppointments(data));
    dispatch(toggleSpinner());

    return null;
  } catch (err) {
    dispatch(toggleSpinner());
    if (!err.response) {
      return err.message;
    }

    return err.response;
  }
};
