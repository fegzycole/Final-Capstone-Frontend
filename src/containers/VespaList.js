import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { addVespas } from '../redux/actions/index';
import Spinner from '../components/Spinner';

const VespaList = ({ vespas, addVespas }) => {
  const [showSpinner, setShowSpinner] = useState(false);

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
    fetchVespas();
  };

  useEffect(initialize, []);

  return (
    <div>
      {
        showSpinner ? <Spinner /> : null
      }
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
