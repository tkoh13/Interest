import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { login, signup, logout } from '../../actions/session_actions';  
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({ 
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  signup: () => dispatch(signup()),
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  // closeModal: () => dispatch(closeModal()),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
