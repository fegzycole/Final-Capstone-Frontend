import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SideBarStyles from '../scss/sidebar.module.scss';
import SocialLinks from './SocialLinks';

const SideBar = ({ links, hamClicked, handleLogout }) => (
  <div
    className={cx(SideBarStyles.SideBar, {
      [SideBarStyles.ShowSideBar]: hamClicked,
    })}
  >
    <h3 className={SideBarStyles.Header}>Vespa</h3>

    <ul className={SideBarStyles.UnorderedList}>
      <li className={SideBarStyles.Model}>
        <NavLink to="/VespaList" className={SideBarStyles.ModelLink}>
          MODELS
        </NavLink>
      </li>
      <li className={SideBarStyles.Model}>
        <NavLink to="/Bookings" className={SideBarStyles.ModelLink}>
          BOOKINGS
        </NavLink>
      </li>
      <li className={SideBarStyles.LogoutBtn}>
        <div
          onClick={handleLogout}
          onKeyPress={handleLogout}
          tabIndex={0}
          role="button"
        >
          LOGOUT
        </div>
      </li>
    </ul>

    <div className={SideBarStyles.SocialLinks}>
      <SocialLinks links={links} />
      <p className={SideBarStyles.SocialLinksP}>&copy; 2020 Ferguson Iyara</p>
    </div>
  </div>
);

SideBar.propTypes = {
  links: PropTypes.instanceOf(Object).isRequired,
  hamClicked: PropTypes.bool,
  handleLogout: PropTypes.func,
};

SideBar.defaultProps = {
  hamClicked: false,
  handleLogout: () => null,
};

const mapStateToProps = ({ hamClicked }) => ({
  hamClicked,
});

export default connect(mapStateToProps)(SideBar);
