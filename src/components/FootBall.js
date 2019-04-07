import React , { Component }from 'react'
import { connect } from 'react-redux';
import {  Switch, Route } from "react-router-dom";
import { DISPATCH_ACTION } from "../actionCreators";


import League from './league'
import Modal from './modal'
import Table from './table'
import Header from "./header";
import Test from './test'


class FootBall extends Component {
  componentDidMount() {
    const { DISPATCH_ACTION } = this.props;
    DISPATCH_ACTION(`competitions/2021/standings`, 'FETCH_TOURNAMENT_TABLE');

  }


  render() {
      const { showLastsMatches } = this.props;
      const modal = showLastsMatches ? <div className="custom-modal-wrapper">
        <Modal />
      </div> : null;
      return (
        <div>
        <Header/>

        <Switch>
          <Route path="/" exact render={()=><h2>Welcome to my app</h2>} />
          <Route
            path="/last-matches"
            render={()=>{
            return(
              <div>
                  <League/>
                  { modal }
              </div>
            )
          }} />
          <Route path="/table" component={Table} exact />
          <Route render={()=> {
            return( <h2>Page not exist</h2>)
          }} />
        </Switch>
        <Test />
        </div>
      )
    }
}
const mapStateToProps = (state) => ({
  showLastsMatches: state.league.showLastsMatches
});


export default connect(mapStateToProps,{DISPATCH_ACTION})(FootBall);
