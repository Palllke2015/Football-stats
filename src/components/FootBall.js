import React , { Component }from 'react'
import { connect } from 'react-redux';
import {  Switch, Route } from "react-router-dom";
import { DISPATCH_ACTION, fetchTableStart } from "../actionCreators";


import League from './league'
import Modal from './modal'
import Table from './table'
import Header from "./header";


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
          <Route render={()=> {
            return( <h2>Page not exist</h2>)
          }} />
        </Switch>
        </div>
      )
    }
}
const mapStateToProps = (state) => ({
  showLastsMatches: state.league.showLastsMatches
});


export default connect(mapStateToProps,{DISPATCH_ACTION, fetchTableStart})(FootBall);
