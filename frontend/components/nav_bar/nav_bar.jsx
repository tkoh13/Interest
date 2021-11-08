import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import SignUpFormContainer from '../session_form/signup_form_container'
// import LogInFormContainer from '../session_form/login_form_container';


const NavBar = ({ currentUser, logout, openModal, closeModal }) => { 
  // const [isOpen, setIsOpen] = useState(false);
  console.log("this is the NavBar!!")

  const navBarLeft = currentUser ? (
    <div className="nb nb-content-left">
      <Link to="/" >
        <div className="interest-logo">I</div>
        <div className="home-link">HomePlaceholder</div>
      </Link>
      <Link to="/" className="today-link">TodayPlaceholder</Link>
    </div>
  ) : (
    <div className="nb nb-content-left">
      <Link to="/" >
        <div className="interest-logo">I</div>
        <div className="interest-logo-name">Interest</div>
      </Link>
    </div>
  );

  const navBarRight = currentUser ? ( 
    <div className="nb nb-content-right">
      <p>Heyyyyyy {currentUser.username}!</p>
      <Link to="/">ProfilePlaceholder</Link>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="nb nb-content-right">
      <div>
          <button onClick={() => openModal('login')} id="login-button">Log In</button>
      </div>

      <div>
          <button onClick={() => openModal('signup')} id="signup-button">Sign Up</button>
      </div>
    </div>

    // <div className="nav-bar-display">
    //   <Link id="login-button" to="/login">Log In</Link>
    //   <Link id="signup-button" to="/signup">Sign Up</Link>
    // </div>
  );

  return (
    <nav className="nb nb-content">
      {navBarLeft}
      {navBarRight}
    </nav>
  );
};

export default NavBar