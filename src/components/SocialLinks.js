import React from 'react';
import SideBarLinksStyles from '../scss/sidebarlinks.module.scss';

const SideBarLinks = () => (
  <div className={SideBarLinksStyles.SideBarLinks}>
    <a
      rel="noopener noreferrer"
      href="https://twitter.com/fergusoniyara"
      target="_blank"
      className={SideBarLinksStyles.Link}
    >
      <i className="fa fa-twitter twitter" />
    </a>
    <a
      rel="noopener noreferrer"
      href="https://github.com/fegzycole"
      target="_blank"
      className={SideBarLinksStyles.Link}
    >
      <i className="fa fa-github github" />
    </a>
    <a
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/fergusoniyara/"
      target="_blank"
      className={SideBarLinksStyles.Link}
    >
      <i className="fa fa-linkedin linkedIn" />
    </a>
    <a
      rel="noopener noreferrer"
      href="https://www.instagram.com/fegor___/"
      target="_blank"
      className={SideBarLinksStyles.Link}
    >
      <i className="fa fa-instagram instagram" />
    </a>
  </div>
);

export default SideBarLinks;
