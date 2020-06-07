import React from 'react';
import Landing from '../scss/landing.module.scss';
import Header from '../components/Header';

const LandingPage = () => {
  return (
    <div className={Landing.LandingPage}>
      <Header />
      <div className={Landing.Overlay} />
    </div>
  )
}

export default LandingPage;
