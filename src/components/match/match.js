import React, { Component } from 'react'
import { connect } from 'react-redux';
import { DISPATCH_ACTION, SHOW_LAST_MATCHES } from "../../actionCreators";


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
      const day = date.getDay();
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
    const { info, DISPATCH_ACTION, SHOW_LAST_MATCHES} = this.props;
    DISPATCH_ACTION(`teams/${info.awayTeam.id}/matches`, 'FETCH_TEAM_INFO_AWAY', info.awayTeam.id);
    DISPATCH_ACTION(`teams/${info.homeTeam.id}/matches`, 'FETCH_TEAM_INFO_HOME', info.homeTeam.id);
    SHOW_LAST_MATCHES();

  }
}

const mapDispatchToProps = {
  DISPATCH_ACTION,
  SHOW_LAST_MATCHES
};

export default connect(null, mapDispatchToProps)(Match);
