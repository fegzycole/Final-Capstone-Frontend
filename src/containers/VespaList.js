import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addVespas } from '../redux/actions/index';
import Spinner from '../components/Spinner';
import VespaListStyles from '../scss/vespalist.module.scss';
import Carousel from '../components/Carousel';
import SideBar from '../components/SideBar';
import sideBarLinks from '../utils/index';

const VespaList = ({ vespas, addVespas }) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [length, setLength] = useState(vespas.length);
  const [activeIndices, setActiveIndices] = useState([0, 1, 2]);

  const goToPrevSlide = () => {
    const indices = activeIndices.map(idx => {
      if (idx === 0) {
        return length - 1;
      }

      return idx - 1;
    });
    console.log(indices);
    setActiveIndices(indices);
  };

  const goToNextSlide = () => {
    const indices = activeIndices.map(idx => {
      if (idx === length - 1) {
        return 0;
      }
      return idx + 1;
    });
    console.log(indices);
    setActiveIndices(indices);
  };

  const token = localStorage.getItem('token');

  const fetchVespas = async () => {
    if (vespas.length === 0) {
      const token = localStorage.getItem('token');

      try {
        setShowSpinner(true);

        const {
          data: { automobiles },
        } = await axios.request({
          method: 'GET',
          url:
            'https://desolate-mountain-07619.herokuapp.com/api/v1/automobiles',
          headers: {
            Authorization: token,
          },
        });

        setLength(automobiles.length);

        setShowSpinner(false);
        return addVespas(automobiles);
      } catch (err) {
        setShowSpinner(false);

        if (!err.response) {
          return err.message;
        }

        return err.response;
      }
    }

    return null;
  };

  const checkToken = () => {
    if (!token) {
      return <Redirect to="/Login" />;
    }

    return fetchVespas();
  };

  const initialize = () => {
    checkToken();
  };

  useEffect(initialize, []);

  return (
    <div className={VespaListStyles.VespaList}>
      {showSpinner ? <Spinner /> : null}
      <SideBar links={sideBarLinks} />
      <Carousel
        handleLeftClick={goToPrevSlide}
        handleRightClick={goToNextSlide}
        activeIndices={activeIndices}
        length={length}
        vespas={vespas}
      />
    </div>
  );
};

const mapStateToProps = ({ vespas }) => ({
  vespas,
});

const mapDispatchToProps = dispatch => ({
  addVespas: vespas => dispatch(addVespas(vespas)),
});

VespaList.propTypes = {
  vespas: PropTypes.instanceOf(Array).isRequired,
  addVespas: PropTypes.func,
};

VespaList.defaultProps = {
  addVespas: () => null,
};

export default connect(mapStateToProps, mapDispatchToProps)(VespaList);
