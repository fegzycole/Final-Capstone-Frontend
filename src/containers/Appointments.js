import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import Container from './Container';
import { getBookings } from '../redux/actions/index';
import AppointmentStyles from '../scss/appointments.module.scss';

const Appointments = ({
  appointments, getBookings, vespas, showSpinner,
}) => {
  const token = localStorage.getItem('token');

  const fetchAppointments = async () => {
    const token = localStorage.getItem('token');
    getBookings(vespas, token);
  };

  const checkToken = () => {
    if (!token) {
      return <Redirect to="/Login" />;
    }

    return fetchAppointments();
  };

  const initialize = () => {
    checkToken();
  };

  useEffect(initialize, []);

  return (
    <Container>
      {showSpinner ? <Spinner /> : null}
      {
        appointments.length > 0 ? (
          <div className={AppointmentStyles.BigContainer}>
            <h4 className={AppointmentStyles.Header}>My Appointments</h4>
            <table className={AppointmentStyles.Records}>
              <thead>
                <tr className={AppointmentStyles.Heading}>
                  <th>S/N</th>
                  <th>Model</th>
                  <th>City</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, idx) => (
                  <tr
                    className={AppointmentStyles.Record}
                    key={`${Math.random()} ${Math.random()}`}
                  >
                    <td>
                      <p className={AppointmentStyles.HideDesktop}>S/N</p>
                      <p>{idx + 1}</p>
                    </td>
                    <td>
                      <p className={AppointmentStyles.HideDesktop}>Model</p>
                      <p>{appointment.name}</p>
                    </td>
                    <td>
                      <p className={AppointmentStyles.HideDesktop}>City</p>
                      <p>{appointment.city}</p>
                    </td>
                    <td>
                      <p className={AppointmentStyles.HideDesktop}>Date</p>
                      <p>{appointment.date}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={AppointmentStyles.BigContainerEmpty}>
            <h4 className={AppointmentStyles.Header}>No Bookings Yet</h4>
          </div>
        )
      }
    </Container>
  );
};

const mapStateToProps = ({ appointments, vespas, showSpinner }) => ({
  appointments, vespas, showSpinner,
});

const mapDispatchToProps = dispatch => ({
  getBookings: (vespas, token) => dispatch(getBookings(vespas, token)),
});

Appointments.propTypes = {
  appointments: PropTypes.instanceOf(Array).isRequired,
  getBookings: PropTypes.func,
  vespas: PropTypes.instanceOf(Array).isRequired,
  showSpinner: PropTypes.bool,
};

Appointments.defaultProps = {
  getBookings: () => null,
  showSpinner: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
