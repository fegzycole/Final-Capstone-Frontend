import React from 'react';
import PropTypes from 'prop-types';
import SideBarStyles from '../scss/hamburger.module.scss';

const Hamburger = ({ handleClick }) => (
  <div
    className={SideBarStyles.HamContainer}
    onClick={handleClick}
    role="button"
    onKeyPress={handleClick}
    tabIndex={0}
  >
    <div className={SideBarStyles.Hamburger} />
  </div>
);

Hamburger.propTypes = {
  handleClick: PropTypes.func,
};

Hamburger.defaultProps = {
  handleClick: () => null,
};

export default Hamburger;
