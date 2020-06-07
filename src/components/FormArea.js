import React from 'react';
import PropTypes from 'prop-types';
import Signup from '../scss/signup.module.scss';

const FormArea = ({
  labelText, labelFor, type, name, value, handleChange, imageUrl, placeholder, id, errorMessage,
}) => (
  <div className={Signup.FormArea}>
    <label htmlFor={labelFor}>{labelText}</label>
    <div className={Signup.FormAreaSection}>
      <input
        type={type}
        required
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        id={id}
      />
      <img src={imageUrl} alt="" />
    </div>
    {
      errorMessage ? <p className={Signup.Error}>{`*${errorMessage}`}</p> : null
    }
  </div>
);

FormArea.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  imageUrl: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

FormArea.defaultProps = {
  handleChange: () => null,
  errorMessage: null,
};

export default FormArea;
