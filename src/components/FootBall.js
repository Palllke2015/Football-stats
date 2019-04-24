import React , { Component }from 'react'
import { connect } from 'react-redux';
import {  Switch, Route } from "react-router-dom";
import { fetchTableStart } from "../actionCreators";


import League from './league'
import Modal from './modal'
import Table from './table'
import Header from "./header";
import Chat from './chat'
import LoginBar from './auth/loginBar'
import Login from './auth/loginBar/login'
import Registration from './auth/loginBar/registration'
import ApiVerified from "./api-verified";


class FootBall extends Component {

  componentDidMount() {
    const {  fetchTableStart } = this.props;
    fetchTableStart();

  }


  render() {
      const { showLastsMatches, loading, error } = this.props;
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


export default connect(mapStateToProps,{ fetchTableStart })(FootBall);
