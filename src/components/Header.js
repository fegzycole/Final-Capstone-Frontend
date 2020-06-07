import React from 'react';
import Landing from '../scss/landing.module.scss';

const Header = () => {
  return (
    <header className={Landing.Header}>
      <div className={Landing.HeaderDiv}>
        <h3>Vespa</h3>
      </div>
    </header>
  )
};

export default Header;
