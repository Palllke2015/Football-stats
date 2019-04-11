import React, {Component} from 'react'
import { connect } from "react-redux";
import { SHOW_LAST_MATCHES } from '../../actionCreators'
import './style.css'
import TeamInfo from "../team-info";

class Modal extends Component{

  render() {
    const {matchListHome, matchListHomeName, matchListAway, matchListAwayName, SHOW_LAST_MATCHES} = this.props;
    if (matchListHome === null || matchListAway === null) {
      return null
    }
    return(
      <div className="custom-modal">
        <button className="btn btn-danger custom-modal__button" onClick={SHOW_LAST_MATCHES}>Close</button>
        <div className="custom-modal__left">
          <h2>{matchListHomeName}</h2>
          <TeamInfo matchList={matchListHome} teamName={matchListHomeName}/>
        </div>
        <div className="custom-modal__right">
          <h2>{matchListAwayName}</h2>
          <TeamInfo matchList={matchListAway} teamName={matchListAwayName}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  matchListHome: state.modal.data.homeTeam,
  matchListHomeName: state.modal.data.homeTeamName,
  matchListAway: state.modal.data.awayTeam,
  matchListAwayName: state.modal.data.awayTeamName
});

export default connect(mapStateToProps, {SHOW_LAST_MATCHES})(Modal);
