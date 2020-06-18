import React from 'react';
import Landing from '../scss/landing.module.scss';
import Header from '../components/Header';
import CtaSection from '../components/CtaSection';
import Overlay from '../components/Overlay';

const LandingPage = () => (
  <div className={Landing.LandingPage}>
    <Header />
    <Overlay />
    <CtaSection />
  </div>
);

export default LandingPage;
