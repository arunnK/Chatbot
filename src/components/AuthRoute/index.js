import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

const AuthRoute = (props) => {
  const { userEmail } = props;

  if (userEmail) {
    const Comp = props.component;
    return <Comp {...props} />;
  }
  return <Redirect to={{ pathname: '/' }} />;
};

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired
};

const mapStateToProps = ({ userState }) => {
  return {
    userEmail: get(userState, 'user.email', null)
  };
};

export default withRouter(connect(
  mapStateToProps,
  {}
)(AuthRoute));
