import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import { sideBarLinks } from '../utils/index';
import VespaStyles from '../scss/vespa.module.scss';
import FormModal from '../components/FormModal';
import ConfirmationMessage from '../components/ConfirmationMessage';
import Spinner from '../components/Spinner';

const Vespa = ({ vespas, match }) => {
  const vespa = vespas.find((el, idx) => idx === Number(match.params.id));
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');

  const [showModal, setShowModal] = useState(false);
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const [time, setTime] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
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

    try {
      setShowSpinner(true);

      await axios.request({
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

      setShowSpinner(false);

      setShowConfirmation(true);

      setShowModal(false);

      clearForm();

      return null;
    } catch (error) {
      setShowSpinner(false);
      if (!error.response) {
        setError(error.message);
        return error.message;
      }

      setError(error.response.data.error);
      return error.response.data.error;
    }
  };

  return (
    <div className={VespaStyles.VespaContainer}>
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
      <Sidebar links={sideBarLinks} />
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
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ vespas }) => ({
  vespas,
});

Vespa.propTypes = {
  vespas: PropTypes.instanceOf(Array).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(connect(mapStateToProps)(Vespa));
