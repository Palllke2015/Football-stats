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


class FootBall extends Component {
  componentDidMount() {
    const {  fetchTableStart } = this.props;
    fetchTableStart();
  }


  render() {
      const { showLastsMatches } = this.props;
      const modal = showLastsMatches ? <div className="custom-modal-wrapper">
        <Modal />
      </div> : null;
      return (
        <div>
        <LoginBar />
        <Header/>
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
  showLastsMatches: state.modal.show
});


export default connect(mapStateToProps,{ fetchTableStart})(FootBall);
