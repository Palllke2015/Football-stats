import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { REGISTER } from '../../../../actionCreators/registration/registration'

class Registration extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.REGISTER( email, password);
    this.setState({password: ''})

  };

  render() {
    const { email, password} = this.state;
    const { errorMessage, successMessage, loading } = this.props;
    const error = errorMessage.trim() !== '' ? <p>{errorMessage}</p> : null;
    const success = successMessage.trim() !== '' ? <p>{successMessage}</p> : null;
    const isloading = loading ? <p>Loading...</p> : null;
    return(
      <div className="login-form-wrapper">
        <ul>
          <li>
            <NavLink
              to="/login"
              activeClassName="selected"
            >Login
            </NavLink >
            /
            <NavLink
              to="/registration"
              activeClassName="selected"
            >
              Registration
            </NavLink >
          </li>
        </ul>

        <h2>Registration</h2>
        <form
          onSubmit={this.handleSubmit}
        >
          <label> Email
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={this.handleChange}
              value={email}
            />
          </label>
          <label> Password
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleChange}
              value={password}
            />
          </label>
          <button>Register</button>
        </form>
        {error}
        {success}
        {isloading}
      </div>

    )
  }
}

const props = (state) =>({
  errorMessage: state.registration.errorMessage,
  successMessage: state.registration.successMessage,
  loading: state.registration.loading
});

export default connect(props, { REGISTER })(Registration);
