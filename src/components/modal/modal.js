import React, {Component} from 'react'
import MatchList from '../match-list'
import { connect } from "react-redux";
import { SHOW_LAST_MATCHES } from '../../actionCreators'
import './style.css'

class Modal extends Component{

  render() {
    const {matchListHome, matchListAway, SHOW_LAST_MATCHES} = this.props;
    if (matchListHome === null || matchListAway === null) {
      return null
    }
    return(
      <div className="custom-modal">
        <button className="btn btn-danger custom-modal__button" onClick={SHOW_LAST_MATCHES}>Close</button>
        <div className="custom-modal__left">
          <MatchList
            matches={matchListHome}
          />
        </div>
        <div className="custom-modal__right">
          <MatchList
            matches={matchListAway}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  matchListHome: state.league.teamInfoHome,
  matchListAway: state.league.teamInfoAway,
  isLoading: state.league.matchListShow.isLoading,
});

export default connect(mapStateToProps, {SHOW_LAST_MATCHES})(Modal);
