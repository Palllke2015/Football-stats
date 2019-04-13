import React, { Component } from 'react'

class ChatLogin extends Component{
  state = {
    userName: ''
  };
  render() {
    const { login } = this.props;
    const { userName } = this.state;
    return(
      <form>

        <label>
          <span>Name:</span>
          <input
            type="text"
            placeholder="Name"
            onChange={this.typeName}
            value={userName}
          />
        </label>
        <button onClick={(evt)=>{
          evt.preventDefault();
          login(userName);
        }}>Log In</button>
      </form>
    )
  }
  typeName = (evt) => {
    this.setState({userName: evt.target.value})
  }

}

export default ChatLogin;
