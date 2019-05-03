import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {database} from "../../firebaseService";
import { connect } from "react-redux";

class ApiVerified extends Component {
  state = {
    token: '',
    error: true,
    errorColor: false
  };

  handleToken = (event) => {
    this.setState({token: event.target.value, error: true})
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
    const serverInfo = {
      headers: {'X-Auth-Token': token},
      dataType: 'json',
      type: 'GET'
    };
    fetch(`https://api.football-data.org/v2/competitions/CL/matches`, serverInfo)
      .then((data)=> data.json())
      .then(() => this.setState({error: false, errorColor: false}))
      .catch(() => this.setState({error: true, errorColor: true}))
  };

  render() {
    const { errorColor, error } = this.state;
    const wrongToken = <p style={{color: 'red'}}>Wrong Token</p>;
    const goodToken = <p style={{color: 'green'}}>Good Token</p>;
    return(
      <div>
        <h4>You need to connect the football API to the application for full use.</h4>

        <form onSubmit={this.updateToken}>
          <label>
            Your API token
            <input
              onChange={this.handleToken}
              value={this.state.token}
              style={{borderColor: errorColor ? 'red' :'black'}}
            />
          </label>
          <input
            type="button"
            onClick={this.testApi}
            value="TEST"
          />
          <button disabled={error}> Submit </button>
          <p>{errorColor ? wrongToken : goodToken}</p>
        </form>
        <Link to="/apiModal">See instruction</Link>
      </div>
    )
  }


}

const props = (state) => ({
  email: state.auth.data.email
});
export default connect(props)(ApiVerified);
