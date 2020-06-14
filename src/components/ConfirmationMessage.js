import React from 'react';
import PropTypes from 'prop-types';
import VespaStyles from '../scss/vespa.module.scss';

const ConfirmationMessage = ({ handleClick }) => (
  <div className={VespaStyles.ConfirmText}>
    <p>Vespa Booked Successfully</p>
    <div
      onClick={handleClick}
      onKeyPress={handleClick}
      tabIndex={0}
      role="button"

      className={VespaStyles.HideMsg}
    >
      X
    </div>
  </div>
);

ConfirmationMessage.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ConfirmationMessage;
