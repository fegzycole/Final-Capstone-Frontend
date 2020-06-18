import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = ({
  handleClick, classOne, classTwo, classThree,
}) => (
  <div
    className={classOne}
    onClick={handleClick}
    role="button"
    onKeyPress={handleClick}
    tabIndex={0}
  >
    <div className={classTwo}>
      <div className={classThree} />
    </div>
  </div>
);

LeftArrow.propTypes = {
  handleClick: PropTypes.func,
  classOne: PropTypes.string.isRequired,
  classTwo: PropTypes.string.isRequired,
  classThree: PropTypes.string.isRequired,
};

LeftArrow.defaultProps = {
  handleClick: () => null,
};

export default LeftArrow;
