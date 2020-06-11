import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addVespas } from '../redux/actions/index';
import Spinner from '../components/Spinner';
import VespaListStyles from '../scss/vespalist.module.scss';
import SideBar from '../components/SideBar';

const VespaList = ({ vespas, addVespas }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const token = localStorage.getItem('token');

  const fetchVespas = async () => {
    if (vespas.length === 0) {
      const token = localStorage.getItem('token');

      try {
        setShowSpinner(true);

        const { data: { automobiles } } = await axios.request({
          method: 'GET',
          url: 'https://desolate-mountain-07619.herokuapp.com/api/v1/automobiles',
          headers: {
            Authorization: token,
          },
        });

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

  const initialize = () => {
    if (!token) {
      return <Redirect to="/Login" />;
    }

    return fetchVespas();
  };

  useEffect(initialize, []);

  return (
    <div className={VespaListStyles.VespaList}>
      {
        showSpinner ? <Spinner /> : null
      }
      <SideBar />
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
