import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {database} from "../firebaseService";

class TEST extends Component {
  state = {
    token: ''
  };

  handleToken = (event) => {
    this.setState({token: event.target.value})
  };

  updateToken = () => {
    const { token } = this.state;
    database.collection("users").where("email", "==", '123@123.123')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(async function (doc) {
          console.log(`documentReference.id   = ${doc.id}`);
          const info = database.collection("users").doc(doc.id);

          database.runTransaction((transaction) => {
            return transaction.get(info).then(function() {
              transaction.update(info, {  XAuthToken: token, footballApi: true });
            });
          })
        });
      });
  };

  render() {
    return(
      <div>
        <h4>You need to connect the football API to the application for full use.</h4>

        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            Your API token
            <input
              onChange={this.handleToken}
              value={this.state.token}
              type="text" />
          </label>
          <button onClick={this.updateToken}> Submit </button>
        </form>
        <Link to="/apiModal" >See instruction</Link>
      </div>
    )
  }


}

export default TEST;
