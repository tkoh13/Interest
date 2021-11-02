import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => { // destructuring currentUser and logout which we are getting from our container
  const display = currentUser ? ( 
    <div>
      <p>Heyyyyyy {currentUser.email}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">Nav Bar</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
