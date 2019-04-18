import React, { Component } from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import { LOGIN } from '../../../../actionCreators/auth/login'

class Login extends Component {
  state = {
    email: '',
    password: '',
    redirect: false
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    const { email, password,  } = this.state;
    const { loading, redirect, errorMessage } = this.props;
    const spinner = loading ? <div className="loading"> Loading </div> : null;
    const error = errorMessage ? <p>{errorMessage}</p> : null;
    if (redirect) {
      return (
        <Redirect to="/"/>
      )
    }

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
        <h2>Login</h2>
        <div className="flex relative">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              this.props.LOGIN(email, password);
              this.setState({password: ''})
            }}
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
            <button>Login</button>
          </form>
          { spinner }
          { error }
        </div>
      </div>
    )
  }
}

const props = (state) => ({
  redirect: state.auth.isLogin,
  loading: state.auth.loading,
  errorMessage: state.auth.errorMessage
});

export default connect(props,{ LOGIN })(Login);
