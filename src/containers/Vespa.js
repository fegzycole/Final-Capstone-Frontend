import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import { sideBarLinks } from '../utils/index';
import VespaStyles from '../scss/vespa.module.scss';
import FormModal from '../components/FormModal';

const Vespa = ({ vespas, match }) => {
  const vespa = vespas.find((el, idx) => idx === Number(match.params.id));
  const email = localStorage.getItem('email');

  const [showModal, setShowModal] = useState(false);
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleChange = e => {
    const { target: { name, value } } = e;

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

  return (
    <div className={VespaStyles.VespaContainer}>
      {showModal ? (
        <FormModal
          handleClick={() => setShowModal(!showModal)}
          email={email}
          name={vespa.name}
          city={city}
          date={date}
          time={time}
          handleChange={handleChange}
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
