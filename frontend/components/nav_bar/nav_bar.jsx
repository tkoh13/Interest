import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => { // destructuring currentUser and logout which we are getting from our container
  const navBarHeader = currentUser ? (
    <span className="nav-bar-header">
      {/* <Link to="/" id="home-link">HomePlaceholder</Link> */}
      <Link to="/" >
        <span className="interest-logo">I</span>
        {/* <h1 id="interest-logo">I</h1> */}
        <span className="home-link">HomePlaceholder</span>
        {/* <h1 id="home-link">HomePlaceholder</h1> */}
      </Link>
      <Link to="/" className="today-link">TodayPlaceholder</Link>
      {/* <Link to="/" id="today-link">TodayPlaceholder</Link> */}
    </span>
  ) : (
    <span className="nav-bar-header">
      <Link to="/" >
        <span className="interest-logo">I</span>
        {/* <h1 id="interest-logo">I</h1> */}
        <span className="interest-logo-name">Interest</span>
        {/* <h1 id="interest-logo-name">Interest</h1> */}
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
    <span className="nav-bar-display">
      <Link id="login-button" to="/login">Log In</Link>
      <Link id="signup-button" to="/signup">Sign Up</Link>
    </span>
  );

  return (
    <header className="nav-bar-container">
      {navBarHeader}
      {navBarDisplay}
    </header>
  );
};
