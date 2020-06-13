import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import SignupStyles from '../scss/signup.module.scss';
import Header from '../components/Header';
import Overlay from '../components/Overlay';
import EyeIcon from '../assets/eye.svg';
import MailIcon from '../assets/mail.svg';
import FormArea from '../components/FormArea';
import Spinner from '../components/Spinner';

const SignIn = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  const clearErrors = () => {
    setPasswordError(null);
  };

  const signin = async e => {
    e.preventDefault();

    clearErrors();

    try {
      setShowSpinner(true);
      const { data: { token } } = await axios.post('https://desolate-mountain-07619.herokuapp.com/api/v1/auth/signin', {
        email,
        password,
      });

      setShowSpinner(false);

      localStorage.setItem('token', token);

      localStorage.setItem('email', email);

      history.push('/VespaList');

      return undefined;
    } catch (err) {
      setShowSpinner(false);

      if (!err.response) {
        return err.message;
      }

      const { response: { data: { error } } } = err;

      setPasswordError(error);
      return null;
    }
  };

  return (
    <div className={SignupStyles.Signin}>
      {
        showSpinner ? <Spinner /> : null
      }
      <Header />
      <Overlay />
      <form className={SignupStyles.SigninForm} onSubmit={signin}>
        <h2>Create An Account</h2>
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
          />
        </div>
        <div className={SignupStyles.EmailSection}>
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
        </div>
        <input type="submit" value="Sign In" className={SignupStyles.RegisterBtn} />
        <div className={SignupStyles.CtaLogin}>
          <p>Don&apos;t have an account?</p>
          <NavLink className={SignupStyles.SignInText} to="/Signup">
            Sign Up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.instanceOf(Object),
};

SignIn.defaultProps = {
  history: {},
};

export default withRouter(SignIn);
