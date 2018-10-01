import React, { Component } from "react";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleFieldChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleFieldChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleFieldChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="firstName">Firstname</label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleFieldChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Lastname</label>
            <input
              type="text"
              id="lastName"
              onChange={this.handleFieldChange}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Signup</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
