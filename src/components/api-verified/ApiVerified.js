import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {database} from "../../firebaseService";
import { connect } from "react-redux";

class ApiVerified extends Component {
  state = {
    token: '',
    error: true
  };

  handleToken = (event) => {
    this.setState({token: event.target.value})
  };

  updateToken = (event) => {
    event.preventDefault();
    const { token } = this.state;
    const { email } = this.props;
    database.collection("users").where("email", "==", email)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(async function (doc) {
          const info = database.collection("users").doc(doc.id);

          database.runTransaction((transaction) => {
            return transaction.get(info).then(function() {
              transaction.update(info, {  XAuthToken: token, footballApi: true });
            });
          })
        });
      });
  };
  testApi = () => {
    const { token } = this.state;
    this.setState({error: false});
    const serverInfo = {
      headers: {'X-Auth-Token': token},
      dataType: 'json',
      type: 'GET'
    };
    fetch(`https://api.football-data.org/v2/competitions/CL/matches`, serverInfo)
      .then((data)=> data.json())
      .then(() => this.setState({error: false}))
      .catch((error) => this.setState({error: true}))
  };

  render() {
    return(
      <div>
        <h4>You need to connect the football API to the application for full use.</h4>

        <form onSubmit={this.updateToken}>
          <label>
            Your API token
            <input
              onChange={this.handleToken}
              value={this.state.token}
            />
          </label>
          <input
            type="button"
            onClick={this.testApi}
            value="TEST"
          />
          <button disabled={this.state.error}> Submit </button>
        </form>
        <Link to="/apiModal" >See instruction</Link>
      </div>
    )
  }


}

const props = (state) => ({
  email: state.auth.data.email
});
export default connect(props)(ApiVerified);
