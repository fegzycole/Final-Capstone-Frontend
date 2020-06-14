import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContainerStyles from '../scss/container.module.scss';
import SideBar from '../components/SideBar';
import { sideBarLinks } from '../utils/index';
import { clickHam } from '../redux/actions/index';
import Hamburger from '../components/Hamburger';

const Container = ({ children, clickHam }) => (
  <div className={ContainerStyles.Container}>
    <Hamburger handleClick={clickHam} />
    <SideBar links={sideBarLinks} />
    <div className={ContainerStyles.Child}>
      {children}
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  clickHam: PropTypes.func,
};

Container.defaultProps = {
  clickHam: () => null,
};

const mapDispatchToProps = dispatch => ({
  clickHam: () => dispatch(clickHam()),
});

export default connect(null, mapDispatchToProps)(Container);
