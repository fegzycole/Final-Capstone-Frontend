import React from 'react';
import { NavLink } from 'react-router-dom';
import SideBarStyles from '../scss/sidebar.module.scss';
import SocialLinks from './SocialLinks';

const SideBar = () => (
  <div className={SideBarStyles.SideBar}>
    <h3 className={SideBarStyles.Header}>Vespa</h3>

    <ul>
      <li><NavLink to="/VespaList">MODELS</NavLink></li>
      <li>LOGOUT</li>
    </ul>

    <SocialLinks />
    <p>&copy; 2020 Ferguson Iyara</p>
  </div>
);

export default SideBar;
