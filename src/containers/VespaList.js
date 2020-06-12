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
  const [activeIndex, setActiveIndex] = useState(0);
  const [length, setLength] = useState(vespas.length);

  const goToPrevSlide = () => {
    let index = activeIndex;
    if (index === 0) {
      index = length - 1;
    } else {
      index -= 1;
    }
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    let index = activeIndex;
    if (index === length - 1) {
      index = 0;
    } else {
      index += 1;
    }
    setActiveIndex(index);
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
        activeIndex={activeIndex}
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
