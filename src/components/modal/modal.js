import React, {Component} from 'react'
import { connect } from "react-redux";
import { SHOW_LAST_MATCHES } from '../../actionCreators'
import './style.css'
import TeamInfo from "../team-info";

class Modal extends Component{

  render() {
    const {matchListHome, matchListHomeId, matchListAway, matchListAwayId, SHOW_LAST_MATCHES} = this.props;
    if (matchListHome === null || matchListAway === null) {
      return null
    }
    return(
      <div className="custom-modal">
        <button className="btn btn-danger custom-modal__button" onClick={SHOW_LAST_MATCHES}>Close</button>
        <div className="custom-modal__left">
          <TeamInfo matchList={matchListHome} teamId={matchListHomeId}/>
        </div>
        <div className="custom-modal__right">
          <TeamInfo matchList={matchListAway} teamId={matchListAwayId}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  matchListHome: state.league.teamInfoHome,
  matchListHomeId: state.league.teamInfoHomeId,
  matchListAway: state.league.teamInfoAway,
  matchListAwayId: state.league.teamInfoAwayId
});

export default connect(mapStateToProps, {SHOW_LAST_MATCHES})(Modal);
