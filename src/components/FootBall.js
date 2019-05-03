import React , { Component }from 'react'
import { connect } from 'react-redux';
import {  Switch, Route } from "react-router-dom";
import { APIVERIFIED } from '../actionCreators/api-verified/apiVerified'
import { LOGINED } from '../actionCreators/auth/login'


import League from './league'
import Modal from './modal'
import Table from './table'
import Header from "./header";
import Chat from './chat'
import LoginBar from './auth/loginBar'
import Login from './auth/loginBar/login'
import Registration from './auth/loginBar/registration'
import ApiVerified from "./api-verified";
import firebase from "../firebaseService";
import ApiModal from "./api-verified/api-modal";



class FootBall extends Component {
  state = {
    isLoading: true
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(( user )=> {
      if (user) {
        user.getIdToken()
          .then((idToken) => {
            const token = localStorage.getItem("token");
            if (token === idToken) {
              this.props.LOGINED(localStorage.getItem("email"));
              this.props.APIVERIFIED(localStorage.getItem("email"));
              this.setState({isLoading: false});
            }
            else {
              this.setState({isLoading: false});
            }
          })
      }
      else {
        this.setState({isLoading: false});
      }
    })
  }


  render() {
      const { showLastsMatches, loading, error } = this.props;
      const { isLoading } = this.state;
      if (isLoading) {
        return (<h3>Loading...</h3>)
      }
      const modal = showLastsMatches ? <div className="custom-modal-wrapper">
        <Modal />
      </div> : null;
      let apiVerified = !loading && error ?  <ApiVerified /> : null;

      return (
        <div>
        <LoginBar />
        <Header/>
          { apiVerified }
        <Switch>
          <Route path="/" exact render={()=><h2>Welcome to my app</h2>} />
          <Route
            path="/last-matches"
            render={()=>{
            return(
              <div>
                  <League league={"PL"}/>
                  { modal }
              </div>
            )
          }} />
          <Route path="/table" component={Table} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/registration" component={Registration} exact />
          <Route path="/apiModal" component={ApiModal} exact />
          <Route render={()=> {
            return( <h2>Page not exist</h2>)
          }} />
        </Switch>
        <Chat />
        </div>
      )
    }
}
const mapStateToProps = (state) => ({
  showLastsMatches: state.modal.show,
  loading: state.apiVerified.loading,
  APIVerified: state.auth.APIVerified,
  error: state.apiVerified.error
});


export default connect(mapStateToProps,{ APIVERIFIED, LOGINED })(FootBall);
