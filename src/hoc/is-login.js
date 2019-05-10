import React, { Component } from 'react';
import { connect } from 'react-redux';

function IsLogin(Wrapped) {

    class yes extends Component {
      render() {
        const {isLogin, ...props} = this.props;
        if (!isLogin) {
          return null;
        }
        return (
          <Wrapped {...props}/>
        )
      }
    }

    const easy = (state) => ({
      isLogin: state.auth.isLogin
    });
    return connect(easy)(yes)

}




export default IsLogin;
