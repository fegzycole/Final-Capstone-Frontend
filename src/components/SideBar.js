import React from 'react';
import { NavLink } from 'react-router-dom';
import SideBarStyles from '../scss/sidebar.module.scss';
import SocialLinks from './SocialLinks';

const SideBar = () => (
  <div className={SideBarStyles.SideBar}>
    <h3 className={SideBarStyles.Header}>Vespa</h3>

    <ul className={SideBarStyles.UnorderedList}>
      <li className={SideBarStyles.Model}>
        <NavLink to="/VespaList" className={SideBarStyles.ModelLink}>
          MODELS
        </NavLink>
      </li>
      <li>LOGOUT</li>
    </ul>

    <div className={SideBarStyles.SocialLinks}>
      <SocialLinks />
      <p className={SideBarStyles.SocialLinksP}>&copy; 2020 Ferguson Iyara</p>
    </div>
  </div>
);

export default SideBar;
