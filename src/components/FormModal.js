import React from 'react';
import PropTypes from 'prop-types';
import FormStyles from '../scss/form.module.scss';

const FormModal = ({
  email,
  name,
  handleChange,
  date,
  time,
  city,
  handleSubmit,
  handleClick,
}) => (
  <div className={FormStyles.OverLay}>
    <form onSubmit={handleSubmit} className={FormStyles.Form}>
      <div
        className={FormStyles.CancelBtn}
        onClick={handleClick}
        role="button"
        onKeyPress={handleClick}
        tabIndex={0}
      >
        X
      </div>
      <h2 className={FormStyles.Header}>Book Appointment</h2>

      <div className={FormStyles.Section}>
        <p className={FormStyles.Label}>Email</p>
        <input
          type="text"
          value={email}
          id="email"
          name="email"
          disabled
          className={FormStyles.FormInput}
        />
      </div>
      <div className={FormStyles.Section}>
        <p className={FormStyles.Label}>Model</p>
        <input
          type="text"
          value={name}
          id="vespa-name"
          name="name"
          disabled
          onChange={handleChange}
          className={FormStyles.FormInput}
        />
      </div>
      <div className={FormStyles.Section}>
        <p className={FormStyles.Label}>City</p>
        <input
          type="text"
          value={city}
          id="city"
          name="city"
          required
          onChange={handleChange}
          placeholder="City"
          className={FormStyles.FormInput}
        />
      </div>
      <div className={FormStyles.Section}>
        <p className={FormStyles.Label}>Date</p>
        <input
          type="date"
          value={date}
          id="date"
          name="date"
          required
          onChange={handleChange}
          placeholder="Date"
          className={FormStyles.FormInput}
        />
      </div>
      <div className={FormStyles.Section}>
        <p className={FormStyles.Label}>Time</p>
        <input
          type="time"
          value={time}
          id="time"
          name="time"
          required
          onChange={handleChange}
          placeholder="Time"
          className={FormStyles.FormInput}
        />
      </div>

      <div className={FormStyles.SubmitBtnSection}>
        <input type="submit" value="SUBMIT" className={FormStyles.SubmitBtn} />
      </div>
    </form>
  </div>
);

FormModal.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FormModal;
