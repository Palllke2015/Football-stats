import React , { Component }from 'react'
import { connect } from 'react-redux';
import {  Switch, Route } from "react-router-dom";


import League from './league'
import Modal from './modal'
import Table from './table'
import Header from "./header";


class FootBall extends Component {


  render() {
      const { showLastsMatches } = this.props;
      const modal = showLastsMatches ? <div className="custom-modal-wrapper">
        <Modal />
      </div> : null;
      return (
        <div>
        <Header/>

        <Switch>
          <Route
            path="/"
            exact
            render={()=>{
            return(
              <div>
                <ul className="list-group">
                  <League/>
                  <li className="list-group-item">Premier League</li>
                </ul>
                { modal }
              </div>
            )
          }}/>

          <Route path="/table" component={Table} exact />
        </Switch>

        </div>
      )
    }
}
const mapStateToProps = (state) => ({
  showLastsMatches: state.league.showLastsMatches
});


export default connect(mapStateToProps,)(FootBall);
