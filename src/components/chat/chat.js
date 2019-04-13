import React, { Component } from 'react'
import './style.scss'
import ChatLogin from './chat-login'

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

  componentDidUpdate() {
    this.scrollToMyRef()
  }


  render() {
    const { messages, isLogin, userName } = this.state;
    const messageList = messages.map((elem) => {
      return(
        <p key={elem.id}><span>{userName}</span>: {elem.text}</p>
      )
    });
    const login = !isLogin ? <ChatLogin login={this.login}/> : <div
      className="chat"
    >
      <div
        className="chat-message-wrapper"
        ref={ (ref) => this.myRef=ref }
      >
        {messageList}
      </div>
      <textarea
        className="chat-text"
        placeholder="Отправить сообщение"
        onChange={this.typeMessage}
        value={this.state.userText}
        onKeyDown={this.submit}
      />
      <button onClick={this.sendMessage}>Отправить</button>
    </div>;
    return(
      <div className="chat-wrapper">
        <h2>Football Chat</h2>
        { login }
      </div>
    )
  }
  submit = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault();
      this.sendMessage();
    }
  };
  login = (userName) => {
    this.setState({ userName, isLogin:true })
  };
  myRef = null;
  scrollToMyRef = () => {
    this.myRef.scrollTo(0, this.myRef.scrollHeight)
  };

  typeMessage = (event) => {
    this.setState({userText: event.target.value})
  };
  sendMessage = () => {
    this.idCount = this.idCount + 1;
    if (this.state.userText.trim() === '') {
      return false;
    }
    this.setState((prevState) => {
      return ({
        messages: [...prevState.messages, {
          id: this.idCount,
          text: this.state.userText
        }],
        userText: ''
      })
    });
    this.scrollToMyRef();
  }
}

export default Chat;
