import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import firebase from '../../../firebaseService'

import { LOGINED, signOut } from '../../../actionCreators/auth/login'
import './style.scss'


class LoginBar extends Component{
  state = {
    loading: true
  };
  componentWillMount() {
    firebase.auth().onAuthStateChanged(( user )=> {
      if (user) {
        user.getIdToken()
          .then((idToken) => {
            const token = localStorage.getItem("token");
            this.setState({loading: false});
            if (token === idToken) {
              this.props.LOGINED()
            }
          })
      }
      else {
        this.setState({loading: false});
      }
    })
  }


  render() {
    const { loading } = this.state;
    if (loading) {
      return <h2>Loading....</h2>
    }
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

export default connect(props, { LOGINED, signOut })(LoginBar);
