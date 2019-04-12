import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SHOW_LAST_MATCHES, modalHomeTeamName, modalAwayTeamName, fetchModalInfo } from "../../actionCreators";


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
    const { info, SHOW_LAST_MATCHES, modalHomeTeamName, modalAwayTeamName, fetchModalInfo} = this.props;
    SHOW_LAST_MATCHES();
    modalHomeTeamName(info.homeTeam.name);
    modalAwayTeamName(info.awayTeam.name);
    fetchModalInfo(info.homeTeam.id, "FETCH_MODAL_HOME_SUCCESS");
    fetchModalInfo(info.awayTeam.id, "FETCH_MODAL_AWAY_SUCCESS");
  }
}

const mapDispatchToProps = {
  SHOW_LAST_MATCHES,
  modalHomeTeamName,
  modalAwayTeamName,
  fetchModalInfo
};

export default connect(null, mapDispatchToProps)(Match);
