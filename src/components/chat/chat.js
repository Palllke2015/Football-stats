import React, { Component } from 'react'
import { connect } from "react-redux";
import './style.scss'
import ChatLogin from './chat-login'
import ChatList from './chat-list'

class Chat extends Component{
  idCount = 3;
  state = {
    isLogin: false,
    userName: '',
    userText: '',
    messages: [
      {
        id: 1,
        text:'lol'
      },
      {
        id: 2,
        text: 'axaxa'
      },
      {
        id: 3,
        text: 'Ну очень смешно'
      }
    ]
  };

  render() {
    const { isLogin } = this.state;
    const { email } = this.props;
    if (!email) {
      return null
    }
    const login = !isLogin ? <ChatLogin login={this.login} email={email}/> : <ChatList userName={email} />
    return(
      <div className="chat-wrapper">
        <h2>Football Chat</h2>
        { login }
      </div>
    )
  }

  login = (userName) => {
    this.setState({ userName, isLogin:true })
  };

}

const props = (state) => ({
  email: state.auth.data.email
});

export default connect(props)(Chat);
