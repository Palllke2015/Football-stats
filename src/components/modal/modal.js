import React, {Component} from 'react'
import { connect } from "react-redux";
import { closeModal } from '../../actionCreators/teamInfo/modal'
import './style.css'
import TeamInfo from "../team-info";

class Modal extends Component{

  render() {
    const {
      matchListHome,
      matchListHomeName,
      matchListAway,
      matchListAwayName,
      closeModal,
      homeLoading,
      awayLoading
    } = this.props;

    return(
      <div className="custom-modal">
        <button className="btn btn-danger custom-modal__button" onClick={closeModal}>Close</button>
        <div className="custom-modal__left">
          <h2>{matchListHomeName}</h2>
          <TeamInfo matchList={matchListHome} teamName={matchListHomeName} loading={homeLoading}/>
        </div>
        <div className="custom-modal__right">
          <h2>{matchListAwayName}</h2>
          <TeamInfo matchList={matchListAway} teamName={matchListAwayName} loading={awayLoading}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  matchListHome: state.modal.data.homeTeam,
  matchListHomeName: state.modal.data.homeTeamName,
  matchListAway: state.modal.data.awayTeam,
  matchListAwayName: state.modal.data.awayTeamName,
  homeLoading: state.modal.data.homeTeamLoading,
  awayLoading: state.modal.data.awayTeamLoading
});

export default connect(mapStateToProps, {closeModal})(Modal);
