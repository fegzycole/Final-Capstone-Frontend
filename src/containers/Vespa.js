import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VespaStyles from '../scss/vespa.module.scss';
import FormModal from '../components/FormModal';
import ConfirmationMessage from '../components/ConfirmationMessage';
import Spinner from '../components/Spinner';
import Container from './Container';
import { bookAppointment } from '../redux/actions/index';

const Vespa = ({
  vespas, match, showSpinner, bookAppointment,
}) => {
  const vespa = vespas.find((el, idx) => idx === Number(match.params.id));
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');

  const [showModal, setShowModal] = useState(false);
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const [time, setTime] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = e => {
    const {
      target: { name, value },
    } = e;

    if (name === 'city') {
      setCity(value);
    }

    if (name === 'date') {
      setDate(value);
    }

    if (name === 'time') {
      setTime(value);
    }
  };

  const clearForm = () => {
    setCity('');
    setDate('');
    setTime('');
  };

  const removePopupsAndErrors = () => {
    setError(null);
    setShowConfirmation(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    removePopupsAndErrors();

    const appointmentData = {
      token,
      date,
      time,
      vespa,
      city,
    };

    const message = await bookAppointment(appointmentData);

    if (message === 'Booking successful') {
      setShowModal(false);
      setShowConfirmation(true);
      clearForm();
    } else {
      setError(message);
    }
  };

  return (
    <Container>
      {showConfirmation ? (
        <ConfirmationMessage handleClick={() => setShowConfirmation(false)} />
      ) : null}
      {showSpinner ? <Spinner /> : null}
      {showModal ? (
        <FormModal
          handleClick={() => setShowModal(!showModal)}
          email={email}
          name={vespa.name}
          city={city}
          date={date}
          time={time}
          error={error}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : null}
      {vespa ? (
        <div className={VespaStyles.Vespa}>
          <div className={VespaStyles.VespaSection}>
            <img src={vespa.imageUrl} alt="" className={VespaStyles.VespaImg} />
            <h4 className={VespaStyles.Header}>{vespa.name}</h4>
            <p className={VespaStyles.Text}>{vespa.description}</p>
            <button
              type="button"
              className={VespaStyles.Btn}
              onClick={() => setShowModal(!showModal)}
            >
              Book Now
            </button>
          </div>
        </div>
      ) : (
        <div className={VespaStyles.VespaEmpty}>
          <h4 className={VespaStyles.VespaEmptyHeader}>404</h4>
          <p className={VespaStyles.VespaEmptyText}>Vespa Not Found</p>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = ({ vespas, showSpinner }) => ({
  vespas,
  showSpinner,
});

const mapDispatchToProps = dispatch => ({
  bookAppointment: data => dispatch(bookAppointment(data)),
});

Vespa.propTypes = {
  vespas: PropTypes.instanceOf(Array).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  showSpinner: PropTypes.bool,
  bookAppointment: PropTypes.func,
};

Vespa.defaultProps = {
  showSpinner: false,
  bookAppointment: () => null,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Vespa));
