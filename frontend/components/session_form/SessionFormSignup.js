import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './SessionForm';

const mapStateToProps = ({ sessionErrors }) => {
  return {
    sessionErrors: sessionErrors,
    formType: 'signup',
    navLink: 'login',
    navLinkText: 'Login Instead'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
