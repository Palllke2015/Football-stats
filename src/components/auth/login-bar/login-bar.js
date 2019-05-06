import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { LOGINED, signOut } from '../../../actionCreators/auth/login'
import { APIVERIFIED } from '../../../actionCreators/api-verified/api-verified'
import './style.scss'


class LoginBar extends Component{



  render() {
    const { isLogin, userEmail } = this.props;
    const body = isLogin ?
      <div>
        {userEmail}
        <button
          onClick={this.props.signOut}
        >Log out</button>
      </div>
     :
      <div className="header-menu">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/login"
                activeClassName="active"
              >
                Login
              </NavLink>
              /
              <NavLink
                activeClassName="active"
                to="/registration"
              >
                Registration
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>;

    return (
        <div className="header-wrapper">
          <NavLink to="/">Logo</NavLink>
          { body }
        </div>
    )
  }
}

const props = (state) => ({
  isLogin: state.auth.isLogin,
  logined: state.auth.logined,
  userEmail: state.auth.data.email
});

export default connect(props, { LOGINED, signOut, APIVERIFIED })(LoginBar);
