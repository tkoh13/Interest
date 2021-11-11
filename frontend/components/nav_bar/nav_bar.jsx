import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import SignUpFormContainer from '../session_form/signup_form_container'
// import LogInFormContainer from '../session_form/login_form_container';


const NavBar = ({ currentUser, logout, openModal, closeModal }) => { 
  // const [isOpen, setIsOpen] = useState(false);
  // console.log(currentUser.photoUrl)
  const navBarLeft = currentUser ? (
    <section className="nb nb-content-left">
      <div className="icon-container">
        <div>
          <Link to="/"><img className="interest-logo" src={window.logo}/></Link>
        </div>
      </div>
      <Link to="/" >
        <div className="home-link">Home</div>
      </Link>
      <Link to="/" className="today-link">Today</Link>
    </section>
  ) : (
    <section className="nb nb-content-left">
      <div className="icon-container">
        <div>
          <Link to="/"><img className="interest-logo" src={window.logo}/></Link>
        </div>
      </div>
      <Link to="/" ><div className="interest-logo-name">Interest</div></Link>
    </section>
  );

  const searchBar = currentUser? (
    <input type="text" className="search-bar" placeholder="Search Bar Placeholder" />
  ) : (
    <div className="search-bar"></div>
  );

  const navBarRight = currentUser ? ( 
    <section className="nb nb-content-right">
      {/* <p>Heyyyyyy {currentUser.username}!</p> */}
      <div className="icon-container">
        <Link to="/">
          <img src={currentUser.photoUrl} style={{ width: "32px", height: "32px", borderRadius: "100%", objectFit: "cover" }} />
        </Link>
      </div>
      {/* <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">Dropdown</button>
        <div id="myDropdown" class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> */}
      <div className="icon-container">
        <button onClick={logout}>Logout</button>
      </div>
    </section>
  ) : (
    <section className="nb nb-content-right">
      <div className="about-link">
        <Link to="/about">About</Link>
      </div>
      <div>
          <button onClick={() => openModal('login')} id="login-button">Log In</button>
      </div>

      <div>
          <button onClick={() => openModal('signup')} id="signup-button">Sign Up</button>
      </div>
    </section>

    // <div className="nav-bar-display">
    //   <Link id="login-button" to="/login">Log In</Link>
    //   <Link id="signup-button" to="/signup">Sign Up</Link>
    // </div>
  );

  return (
    <nav className="nb nb-content">
      {navBarLeft}
      {searchBar}
      {navBarRight}
    </nav>
  );
};

export default NavBar