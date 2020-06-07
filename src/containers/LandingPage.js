import React from 'react';
import Landing from '../scss/landing.module.scss';
import Header from '../components/Header';
import CtaSection from '../components/CtaSection';

const LandingPage = () => {
  return (
    <div className={Landing.LandingPage}>
      <Header />
      <div className={Landing.Overlay} />
      <CtaSection />
    </div>
  )
}

export default LandingPage;
