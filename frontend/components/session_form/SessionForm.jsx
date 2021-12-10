import React, { Component } from 'react';
import DemoUser from '../demo_user/DemoUser';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    if (field === "email") {
      return e => this.setState({
        [field]: e.currentTarget.value,
        ["username"]: e.currentTarget.value.split("@")[0]
      })
    } else {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();   
    const user = Object.assign({}, this.state);
    this.props.processForm(this.state).then(()=>this.props.closeModal());
  }

  renderErrors() {
    const { errors } = this.props;
    if(errors === undefined) return null; 
    // need to add in css for errors
    return(
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`}>
            Invalid login credentials: {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType, navLink, navLinkText, openModal } = this.props;
    return (
      <div className="sfc">
        <img className="sf-interest-logo" src={window.logo}/>
        <h1 className="sf-welcome">Welcome to</h1>
        <h2 className="sf-logo-name">Interest</h2>
        <h3 className="sf-h3">Find new ideas to try</h3>
        <form onSubmit={this.handleSubmit} className="sf-form">
          {this.renderErrors()}
          <label>
            <input
              type="text"
              className="sf-input"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <label>
            <input
              type="password"
              className="sf-input"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <div>
            <button id="sf-login">
              {formType === "login" ? "Log In" : "Sign Up"}
            </button>
            <DemoUser />
          </div>
        </form>
        {/* need to add in className and corresponding styling */}
        <button onClick={() => openModal(navLink)} className="sf-or"> 
          {navLinkText}
        </button>
      </div>
    );
  }
}

export default SessionForm;
