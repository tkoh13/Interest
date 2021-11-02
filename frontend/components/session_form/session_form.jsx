import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();   
    const user = Object.assign({}, this.state);
    this.props.processForm(this.state);
  }

  renderErrors() {
    const { errors } = this.props;
    if(errors === undefined) return null; 
    // debugger
    return(
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType, navLink } = this.props;
    return (
      <div>
        <h3>Interest Session Form</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <label>
            Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <div>
            <button>
              {formType === "login" ? "Log In" : "Sign Up"}
            </button>
              {navLink}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
