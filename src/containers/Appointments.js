import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import Container from './Container';
import { addAppointments } from '../redux/actions/index';
import AppointmentStyles from '../scss/appointments.module.scss';

const Appointments = ({ appointments, addAppointments, vespas }) => {
  const token = localStorage.getItem('token');
  const [showSpinner, setShowSpinner] = useState(false);

  const fetchAppointments = async () => {
    const token = localStorage.getItem('token');

    try {
      setShowSpinner(true);

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

      setShowSpinner(false);
      return addAppointments(data);
    } catch (err) {
      setShowSpinner(false);

      if (!err.response) {
        return err.message;
      }

      return err.response;
    }
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

const mapStateToProps = ({ appointments, vespas }) => ({ appointments, vespas });

const mapDispatchToProps = dispatch => ({
  addAppointments: appointments => dispatch(addAppointments(appointments)),
});

Appointments.propTypes = {
  appointments: PropTypes.instanceOf(Array).isRequired,
  addAppointments: PropTypes.func,
  vespas: PropTypes.instanceOf(Array).isRequired,
};

Appointments.defaultProps = {
  addAppointments: () => null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
