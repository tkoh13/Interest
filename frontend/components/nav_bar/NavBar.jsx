import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDownButton from '../dropdown/DropDownButton';
import { FaBell } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'

const NavBar = ({ currentUser, logout, openModal }) => {

  const navBarLeft = currentUser ? (
    <section className="nb nb-content-left">


          <NavLink to="/"><img className="interest-logo" src={window.logo} /></NavLink>


      <NavLink to="/" className={isActive => "nav-link" + (!isActive ? "" : "selected")}>
        <div className="home-link">Home</div>
      </NavLink>
      <NavLink to="/" className={isActive => "nav-link" + (!isActive ? "" : "selected")}>
        <div className="today-link">Today</div>
      </NavLink>
    </section>
  ) : (
    <section className="nb nb-content-left">


          <NavLink to="/"><img className="interest-logo" src={window.logo} /></NavLink>


      <NavLink to="/" ><div className="interest-logo-name">Interest</div></NavLink>
    </section>
  );
  
  const searchBar = currentUser ? (
    // <input type="text" className="search-bar" placeholder="Search Bar Placeholder" />
    <div className="search-bar"></div>
  ) : (
    <div className="search-bar"></div>
  );

  const navBarRight = currentUser ? (
    <section className="nb nb-content-right">
      <div className="icon-container react-icon">
        <FaBell style={{ width: "28px", height: "28px", borderRadius: "100%", objectFit: "cover" }} />
      </div>
      <div className="icon-container react-icon">
        <AiFillMessage style={{ width: "28px", height: "28px", borderRadius: "100%", objectFit: "cover" }} />
      </div>
      <div className="icon-container">
        <NavLink to={`users/${currentUser.id}`}>
          {currentUser.photoUrl ?
          <img src={currentUser.photoUrl} style={{ width: "30px", height: "30px", borderRadius: "100%", objectFit: "cover" }} /> :
          <img src={window.userIcon} style={{ width: "30px", height: "30px", borderRadius: "100%", objectFit: "cover" }} />}
        </NavLink>
      </div>
      <DropDownButton type="nav" actions={{logout, openModal, currentUser}} />
    </section>
  ) : (
    <section className="nb nb-content-right">
      <div className="about-link">
        <NavLink to="/about">About</NavLink>
      </div>      
      <div>
        <button onClick={() => openModal('login')} id="login-button">Log In</button>
      </div>
      <div>
        <button onClick={() => openModal('signup')} id="signup-button">Sign Up</button>
      </div>
    </section>
  );

  return (
    <nav className="nb nb-content">
      {navBarLeft}
      {searchBar}
      {navBarRight}
    </nav>
  );
};

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';  
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({ 
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
