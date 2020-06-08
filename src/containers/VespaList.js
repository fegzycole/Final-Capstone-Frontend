import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { addVespas } from '../redux/actions/index';

const VespaList = ({ vespas, addVespas }) => {
  useEffect(() => {
    if (!vespas) {
      const token = localStorage.getItem('token');
      try {
        const { data } = axios.request({
          method: 'GET',
          url: 'https://avariz-core.herokuapp.com/trading/pairs/fetch?category=all',
          headers: {
            Authorization: token,
          },
        });
        return addVespas(data);
      } catch (err) {
        if (!err.response) {
          return err.message;
        }

        return err.response;
      }
    }

    return null;
  }, []);

  return (
    <div>
      Hello
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
