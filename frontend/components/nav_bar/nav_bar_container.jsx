import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';


import { login, signup, logout } from '../../actions/session_actions';  

const mapStateToProps = state => ({ 
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  signup: () => dispatch(signup()),
  logout: () => dispatch(logout()),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
