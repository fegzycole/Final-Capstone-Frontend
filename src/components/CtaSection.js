import React from 'react';
import { NavLink } from 'react-router-dom';
import Landing from '../scss/landing.module.scss';

const CtaSection = () => (
  <div className={Landing.CtaSection}>
    <h2>Vespas That Work</h2>
    <p>Have a look at some of our amazing vespas</p>
    <NavLink className={Landing.SignupBtn} to="/Signup">
      Get Started
    </NavLink>
    <div className={Landing.CtaLogin}>
      <p>Already have an account?</p>
      <NavLink className={Landing.SignInText} to="/Signin">
        Sign In
      </NavLink>
    </div>
  </div>
);

export default CtaSection;
