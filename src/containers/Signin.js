import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import SignupStyles from '../scss/signup.module.scss';
import Header from '../components/Header';
import Overlay from '../components/Overlay';
import EyeIcon from '../assets/eye.svg';
import MailIcon from '../assets/mail.svg';
import FormArea from '../components/FormArea';
import Spinner from '../components/Spinner';
import { signin } from '../redux/actions/index';

const SignIn = ({
  history, showSpinner, signin, signinError,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);

  useEffect(() => {
    setPasswordError(signinError);
  }, [signinError, showSpinner]);

  const clearErrors = () => {
    setPasswordError(null);
  };

  const signinUser = async e => {
    e.preventDefault();

    clearErrors();

    const userData = {
      email,
      password,
    };

    await signin(userData);

    const token = localStorage.getItem('token');

    if (token) {
      history.push('/VespaList');
    }
  };

  return (
    <div className={SignupStyles.Signin}>
      {
        showSpinner ? <Spinner /> : null
      }
      <Header />
      <Overlay />
      <form className={SignupStyles.SigninForm} onSubmit={signinUser}>
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
  signinError: PropTypes.string,
  signin: PropTypes.func,
  showSpinner: PropTypes.bool.isRequired,
};

SignIn.defaultProps = {
  history: {},
  signinError: null,
  signin: () => null,
};

const mapStateToProps = ({ signinError, showSpinner }) => ({
  signinError,
  showSpinner,
});

const mapDispatchToProps = dispatch => ({
  signin: userData => dispatch(signin(userData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
