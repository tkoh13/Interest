import React, { Component } from 'react';
import { openModal } from '../../actions/modal_actions';
import DemoUserContainer from '../demo_user/demo_user_container';

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
            Why you lying to me?! Fix this shit: {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType, navLink, navLinkText, openModal } = this.props;
    return (
      <div className="session-form-container">
        <h3>Interest Session Form</h3> 
        <form onSubmit={this.handleSubmit} className="session-form-form">
          {this.renderErrors()}
          <label>
            Email
            <input
              type="text"
              className="session-form-input"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              className="session-form-input"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <div>
            <button>
              {formType === "login" ? "Log In" : "Sign Up"}
            </button>
            <DemoUserContainer/>
          </div>
        </form>
        {/* need to add in className and corresponding styling */}
        <button onClick={() => openModal(navLink)}> 
          {navLinkText}
        </button>
      </div>
    );
  }
}

export default SessionForm;
