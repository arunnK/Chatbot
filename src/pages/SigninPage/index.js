import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';
import { signInUserSuccess } from './actions';

import './signinpage.scss';

import SignIn from '../../components/sign-in';

const SigninPage = ({ ...props }) => (
  <div className="homepage">
    <div className="intro-text">
      <h2 className="main-text">BUDDY</h2>
      <h4 className="sub-text">Just another chatbot!</h4>
    </div>
    <SignIn className="sign-in" {...props} />
  </div>
);

SigninPage.propTypes = {
  history: PropTypes.shape({}).isRequired,
  signInUserSuccess: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired
};

const mapStateToProps = ({ userState }) => {
  return {
    userEmail: get(userState, 'user.email', '')
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
)(SigninPage));
