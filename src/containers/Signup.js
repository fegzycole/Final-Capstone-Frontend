import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SignupStyles from '../scss/signup.module.scss';
import Header from '../components/Header';
import Overlay from '../components/Overlay';
import EyeIcon from '../assets/eye.svg';
import PersonIcon from '../assets/man.svg';
import MailIcon from '../assets/mail.svg';
import FormArea from '../components/FormArea';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailNameError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const signup = async e => {
    e.preventDefault();

    try {
      
    } catch (error) {

    }
  };
  return (
    <div className={SignupStyles.Signup}>
      <Header />
      <Overlay />
      <form className={SignupStyles.Form}>
        <h2>Create An Account</h2>

        <div className={SignupStyles.FormSection}>
          <FormArea
            name="firstName"
            value={firstName}
            type="text"
            handleChange={event => setFirstName(event.target.value)}
            imageUrl={PersonIcon}
            placeholder="First Name"
            labelFor="firstName"
            id="firstName"
            labelText="First Name"
            errorMessage={firstNameError}
          />
          <FormArea
            name="lastName"
            value={lastName}
            type="text"
            handleChange={event => setLastName(event.target.value)}
            imageUrl={PersonIcon}
            placeholder="Last Name"
            labelFor="lastName"
            id="lastName"
            labelText="Last Name"
            errorMessage={lastNameError}
          />
        </div>
        <div className={SignupStyles.EmailSection}>
          <FormArea
            name="email"
            value={email}
            type="email"
            handleChange={event => setEmail(event.target.value)}
            imageUrl={MailIcon}
            placeholder="Email"
            labelFor="email"
            id="email"
            labelText="Email"
            errorMessage={emailError}
          />
        </div>
        <div className={SignupStyles.FormSection}>
          <FormArea
            name="password"
            value={password}
            type="password"
            handleChange={event => setPassword(event.target.value)}
            imageUrl={EyeIcon}
            placeholder="Password"
            labelFor="password"
            id="password"
            labelText="Password"
            errorMessage={passwordError}
          />
          <FormArea
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            handleChange={event => setConfirmPassword(event.target.value)}
            imageUrl={EyeIcon}
            placeholder="Confirm Password"
            labelFor="confirmPassword"
            id="confirmPassword"
            labelText="Confirm Password"
            errorMessage={confirmPasswordError}
          />
        </div>
        <input type="submit" value="Sign Up" className={SignupStyles.RegisterBtn} />
        <div className={SignupStyles.CtaLogin}>
          <p>Already have an account?</p>
          <NavLink className={SignupStyles.SignInText} to="/Signin">
            Sign In
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Signup;
