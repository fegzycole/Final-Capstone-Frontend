import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContainerStyles from '../scss/container.module.scss';
import SideBar from '../components/SideBar';
import { sideBarLinks } from '../utils/index';
import { clickHam } from '../redux/actions/index';
import Hamburger from '../components/Hamburger';

const Container = ({ children, clickHam, history }) => {
  const Logout = () => {
    localStorage.clear();
    history.push('/Signin');
  };

  return (
    <div className={ContainerStyles.Container}>
      <Hamburger handleClick={clickHam} />
      <SideBar links={sideBarLinks} handleLogout={Logout} />
      <div className={ContainerStyles.Child}>
        {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  clickHam: PropTypes.func,
  history: PropTypes.instanceOf(Object),
};

Container.defaultProps = {
  clickHam: () => null,
  history: {},
};

const mapDispatchToProps = dispatch => ({
  clickHam: () => dispatch(clickHam()),
});

export default withRouter(connect(null, mapDispatchToProps)(Container));
