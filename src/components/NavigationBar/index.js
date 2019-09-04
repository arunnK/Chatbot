import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { bindActionCreators } from 'redux';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from './actions';
import './navigation.scss';
/* eslint-disable jsx-a11y/anchor-is-valid */

const NavigationBarComponent = ({ ...props }) => {
  const handleClick = () => {
    props.logout();
  };
  const { pathname } = props.location;
  if (pathname === '/') return null;
  return (
    <Navbar
      className="navigation-container"
      collapseOnSelect
      expand="lg"
      variant="light"
      style={{ padding: '.5rem 1.5rem .5rem 1.5rem' }}
    >
      <Nav.Link onClick={handleClick} as="div" className="right-side-navigation_navlink">
        Sign out
      </Nav.Link>
    </Navbar>
  );
};

NavigationBarComponent.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  logout: PropTypes.func.isRequired
};

NavigationBarComponent.defaultProps = {
  location: {
    pathname: ''
  },
  history: {}
};

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: bindActionCreators(logout, dispatch)
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBarComponent));
