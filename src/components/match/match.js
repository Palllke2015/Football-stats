import React, { Component } from 'react'
import { connect } from 'react-redux';
import { DISPATCH_ACTION, SHOW_LAST_MATCHES, modalHomeTeamName, modalAwayTeamName, fetchModalStart } from "../../actionCreators";


class Match extends Component {
  render() {

    const { info } = this.props;
    const {
      awayTeam: {
        name: guestTeam
      },
      homeTeam: { name: homeTeam},
      score: {fullTime: {
        awayTeam: golCountGuest,
        homeTeam: golCountHome
      }},
      status,
      utcDate
    } = info;
    if (status === 'FINISHED') {
      return <li className='d-flex justify-content-between border-bottom' onClick={this.teamInfo}><span style={{width:250}}>{homeTeam}</span> <span>{golCountHome} : {golCountGuest}</span> <span style={{width:250, textAlign: 'right'}}>{guestTeam}</span>
      </li>
    }
    if (status === 'SCHEDULED') {
      const date = new Date(utcDate);
      const day = date.getDate();
      const month = date.getMonth();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь'];

      return <li className='d-flex justify-content-between border-bottom' onClick={this.teamInfo}>
        <span
          style={{width:250}}
        >{homeTeam}</span> <span>
        {day} {arr[month]} - {hours}:{minutes}
      </span> <span
        style={{width:250, textAlign: 'right'}}
      >{guestTeam}</span>
      </li>
    }

    return (
      <li className='d-flex justify-content-center border-bottom' onClick={this.teamInfo}>{homeTeam} -  {guestTeam}</li>
    )
  }
  teamInfo = () => {
    const { info, DISPATCH_ACTION, SHOW_LAST_MATCHES, modalHomeTeamName, modalAwayTeamName, fetchModalStart} = this.props;
    DISPATCH_ACTION(`teams/${info.awayTeam.id}/matches`, 'FETCH_TEAM_INFO_AWAY', info.awayTeam.name);
    DISPATCH_ACTION(`teams/${info.homeTeam.id}/matches`, 'FETCH_TEAM_INFO_HOME', info.homeTeam.name);
    SHOW_LAST_MATCHES();
    modalHomeTeamName(info.homeTeam.name);
    modalAwayTeamName(info.awayTeam.name);
    fetchModalStart(info.homeTeam.id, "FETCH_MODAL_HOME_SUCCESS");
    fetchModalStart(info.awayTeam.id, "FETCH_MODAL_AWAY_SUCCESS");
  }
}

const mapDispatchToProps = {
  DISPATCH_ACTION,
  SHOW_LAST_MATCHES,
  modalHomeTeamName,
  modalAwayTeamName,
  fetchModalStart
};

export default connect(null, mapDispatchToProps)(Match);
