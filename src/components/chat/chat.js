import React, { Component } from 'react'
import './style.scss'

class Chat extends Component{
  render() {
    return(
      <div className="chat-wrapper">
        <h2>lol</h2>
        <div className="chat">
          <div className="chat-message-wrapper">
            <p>lol</p>
            <p>ahhah</p>
          </div>
          <textarea className="chat-text" placeholder="Отправить сообщение" />
        </div>
      </div>

    )
  }
}

export default Chat;
