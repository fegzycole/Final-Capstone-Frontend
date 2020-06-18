import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Container from './Container';
import { getVespas } from '../redux/actions/index';
import Spinner from '../components/Spinner';
import Carousel from '../components/Carousel';

const VespaList = ({ vespas, getVespas, showSpinner }) => {
  const [length, setLength] = useState(vespas.length);
  const [activeIndices, setActiveIndices] = useState([0, 1, 2]);

  const goToPrevSlide = () => {
    const indices = activeIndices.map(idx => {
      if (idx === 0) {
        return length - 1;
      }

      return idx - 1;
    });
    setActiveIndices(indices);
  };

  const goToNextSlide = () => {
    const indices = activeIndices.map(idx => {
      if (idx === length - 1) {
        return 0;
      }
      return idx + 1;
    });
    setActiveIndices(indices);
  };

  const token = localStorage.getItem('token');

  const fetchVespas = async () => {
    await getVespas(token, setLength);
  };

  const checkToken = () => {
    if (!token) {
      return <Redirect to="/Login" />;
    }

    fetchVespas();

    setLength(vespas.length);

    return undefined;
  };

  const initialize = () => {
    checkToken();
  };

  useEffect(initialize, [vespas.length]);

  return (
    <Container>
      {showSpinner ? <Spinner /> : null}
      <Carousel
        handleLeftClick={goToPrevSlide}
        handleRightClick={goToNextSlide}
        activeIndices={activeIndices}
        length={length}
        vespas={vespas}
      />
    </Container>
  );
};

const mapStateToProps = ({ vespas, showSpinner }) => ({
  vespas,
  showSpinner,
});

const mapDispatchToProps = dispatch => ({
  getVespas: token => dispatch(getVespas(token)),
});

VespaList.propTypes = {
  vespas: PropTypes.instanceOf(Array).isRequired,
  getVespas: PropTypes.func,
  showSpinner: PropTypes.bool,
};

VespaList.defaultProps = {
  getVespas: () => null,
  showSpinner: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(VespaList);
