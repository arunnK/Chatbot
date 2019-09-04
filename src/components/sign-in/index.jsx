import React, { useReducer, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { signInUserSuccess } from './actions';

import './sign-in.styles.scss';

const reducer = (state = {}, action) => {
  const { key, value, type } = action;
  switch (type) {
    case 'inputChange':
      return { ...state, [key]: value };
    case 'setError':
      return { ...state, errorMsg: value };
    default:
      throw new Error();
  }
};

const SignIn = (props) => {
  const [state, dispatcher] = useReducer(reducer, { email: '', password: '' });
  const { history, userEmail } = props;
  useEffect(() => {
    if (userEmail) {
      history.push('/home');
    }
  }, [userEmail, history]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = state;
    if (email === 'test@gmail.com' && password === 'test') {
      props.signInUserSuccess({ email });
    } else {
      dispatcher({ value: 'Password or User Name is incorrect!', type: 'setError' });
    }
  };

  const handleChange = (event) => {
    const { value, name: key } = event.target;
    dispatcher({ key, value, type: 'inputChange' });
  };

  const { errorMsg, password, email } = state;
  return (
    <div className="sign-in">
      <div className="sign-in-container">
        <h3 className="title">Sign in with your email and password</h3>
        <h5 className="error-text">{errorMsg}</h5>
        <form onSubmit={handleSubmit}>
          <div className="group">
            <input
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={e => handleChange(e)}
              required
              className="form-input"
            />
            <label className={`${email.length ? 'shrink' : ''} form-input-label`}>Email</label>
          </div>

          <div className="group">
            <input
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={e => handleChange(e)}
              className="form-input"
              required
            />

            <label className={`${password.length ? 'shrink' : ''} form-input-label`}>Password</label>
          </div>

          <div className="buttons">
            <button type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  signInUserSuccess: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired
};

const mapStateToProps = ({ userState }) => {
  return {
    userEmail: get(userState, 'user.email', null)
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signInUserSuccess: bindActionCreators(signInUserSuccess, dispatch)
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn));
