import React from 'react';
import PropTypes from 'prop-types';
import SideBarLinksStyles from '../scss/sidebarlinks.module.scss';

const SideBarLinks = ({ links }) => (
  <div className={SideBarLinksStyles.SideBarLinks}>
    {
      links.map(({ link, className }) => (
        <a
          rel="noopener noreferrer"
          href={link}
          target="_blank"
          className={SideBarLinksStyles.Link}
          key={`${Math.random()}-${Math.random()}`}
        >
          <i className={className} />
        </a>
      ))
    }
  </div>
);

SideBarLinks.propTypes = {
  links: PropTypes.instanceOf(Object).isRequired,
};

export default SideBarLinks;
