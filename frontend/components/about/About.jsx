import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaAngellist, FaReact } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { SiRubyonrails } from "react-icons/si";

const About = () => {

  return (
    <div className="about-container">
      <h1>
        A fullstack <span className="about-interest-logo-name">Pinterest</span> clone
      </h1>
      <h2>Built with</h2>
      <h3>
        <FaReact
          size={60}
          className="built-with"
          style={{ color: "#60DBFB" }}
        />
        <div className="built-with">and</div>{" "}
        <SiRubyonrails
          size={60}
          className="built-with"
          style={{ color: "#C52F24" }}
        />{" "}
      </h3>
      <h4>Check me out below!</h4>
      <div className="about-links">
        <a href="https://github.com/tkoh13" target="_blank">
          <AiOutlineGithub size={60} />
        </a>
        <a
          href="https://www.linkedin.com/in/tylerkoh/"
          target="_blank"
          style={{ color: "#0176B5" }}
        >
          <IoLogoLinkedin size={60} />
        </a>
        {/* <a href="https://angel.co/u/tyler-koh-1" target="_blank">
          <FaAngellist size={60} />
        </a> */}
      </div>
    </div>
  );
}

import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);