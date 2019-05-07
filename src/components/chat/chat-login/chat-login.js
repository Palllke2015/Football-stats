import React, { Component } from 'react'

class ChatLogin extends Component{
  state = {
    userName: '',
    radioSelected: ''
  };
  render() {
    const { login, email } = this.props;
    const { userName, radioSelected } = this.state;
    let chatName, customUserName;
    if (radioSelected === 'email') {
      chatName = email ;
    }
    if (radioSelected === 'customLogin') {
      chatName = userName;
      customUserName = <label>
        <span>Name:</span>
        <input
          type="text"
          placeholder="Name"
          onChange={this.typeName}
          value={userName}
        />
      </label>;
    }
    return(
      <div>
        <p>Use your email address or username to enter chat</p>
        <div style={{width: "80%", margin: "0 auto"}}>
          <label style={{marginRight: "25px"}}>
            email
            <input
              type="radio"
              value="email"
              onChange={this.handleRadio}
              checked={this.state.radioSelected === "email"}
            />
          </label>
          <label>
            custom name
            <input
              type="radio"
              value="customLogin"
              checked={this.state.radioSelected === "customLogin"}
              onChange={this.handleRadio}
            />
          </label>
        </div>
          <form>
            {customUserName}
            <button onClick={(evt)=>{
              evt.preventDefault();
              login(chatName);
            }}>Log In</button>
          </form>
      </div>
    )
  };

  typeName = (evt) => {
    this.setState({userName: evt.target.value});
  };

  handleRadio = (event) => {
    this.setState({radioSelected: event.target.value});
  }
}

export default ChatLogin;
