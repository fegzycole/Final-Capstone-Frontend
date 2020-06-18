import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignupStyles from '../scss/signup.module.scss';
import Header from '../components/Header';
import Overlay from '../components/Overlay';
import EyeIcon from '../assets/eye.svg';
import PersonIcon from '../assets/man.svg';
import MailIcon from '../assets/mail.svg';
import FormArea from '../components/FormArea';
import Spinner from '../components/Spinner';
import { signup } from '../redux/actions/index';

const Signup = ({
  history, signupErrors, signup, showSpinner,
}) => {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  useEffect(() => {
    signupErrors.forEach(err => {
      if (err.toLowerCase().match('first')) setFirstNameError(err);
      if (err.toLowerCase().match('last')) setLastNameError(err);
      if (err.toLowerCase().match('email')) setEmailError(err);
      if (err.toLowerCase().match('password')) setPasswordError(err);
    });
  }, [signupErrors, showSpinner]);

  const clearErrorMessages = () => {
    setFirstNameError(null);
    setLastNameError(null);
    setEmailError(null);
    setPasswordError(null);
    setConfirmPasswordError(null);
  };

  const signupUser = async e => {
    e.preventDefault();

    clearErrorMessages();

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords must match');
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };

      await signup(userData);

      const token = localStorage.getItem('token');

      if (token) {
        history.push('/VespaList');
      }
    }
  };

  return (
    <div className={SignupStyles.Signup}>
      {
        showSpinner ? <Spinner /> : null
      }
      <Header />
      <Overlay />
      <form className={SignupStyles.Form} onSubmit={signupUser}>
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

Signup.propTypes = {
  history: PropTypes.instanceOf(Object),
  signupErrors: PropTypes.instanceOf(Array),
  signup: PropTypes.func,
  showSpinner: PropTypes.bool.isRequired,
};

Signup.defaultProps = {
  history: {},
  signupErrors: [],
  signup: () => null,
};

const mapStateToProps = ({ signupErrors, showSpinner }) => ({
  signupErrors,
  showSpinner,
});

const mapDispatchToProps = dispatch => ({
  signup: userData => dispatch(signup(userData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
