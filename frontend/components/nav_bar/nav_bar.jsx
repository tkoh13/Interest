import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container'
import LogInFormContainer from '../session_form/login_form_container';
import Modal from '../modal/modal'

export default ({ currentUser, logout }) => { 
  const [isOpen, setIsOpen] = useState(false);

  const navBarHeader = currentUser ? (
    <span className="nav-bar-header">
      <Link to="/" >
        <span className="interest-logo">I</span>
        <span className="home-link">HomePlaceholder</span>
      </Link>
      <Link to="/" className="today-link">TodayPlaceholder</Link>
    </span>
  ) : (
    <span className="nav-bar-header">
      <Link to="/" >
        <span className="interest-logo">I</span>
        <span className="interest-logo-name">Interest</span>
      </Link>
    </span>
  );

  const navBarDisplay = currentUser ? ( 
    <span className="nav-bar-display">
      <p>Heyyyyyy {currentUser.username}!</p>
      <Link to="/">ProfilePlaceholder</Link>
      <button onClick={logout}>Logout</button>
    </span>
  ) : (
    <div>
      <div>
          <button onClick={() => setIsOpen(true)} id="login-button">Log In</button>
          <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
              <LogInFormContainer/>
          </Modal>
      </div>

      <div>
          <button onClick={() => setIsOpen(true)} id="signup-button">Sign Up</button>
          <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
              <SignUpFormContainer/>
          </Modal>
      </div>
    </div>

    // <div className="nav-bar-display">
    //   <Link id="login-button" to="/login">Log In</Link>
    //   <Link id="signup-button" to="/signup">Sign Up</Link>
    // </div>
  );

  return (
    <header className="nav-bar-container">
      {navBarHeader}
      {navBarDisplay}
    </header>
  );
};
