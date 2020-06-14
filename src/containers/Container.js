import React from 'react';
import PropTypes from 'prop-types';
import ContainerStyles from '../scss/container.module.scss';
import SideBar from '../components/SideBar';
import { sideBarLinks } from '../utils/index';
import Hamburger from '../components/Hamburger';

const Container = ({ children }) => (
  <div className={ContainerStyles.Container}>
    <Hamburger />
    <SideBar links={sideBarLinks} />
    <div className={ContainerStyles.Child}>
      {children}
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
