import React, { Component } from 'react'


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
      return <li className='d-flex justify-content-between border-bottom'><span style={{width:250}}>{homeTeam}</span> <span>{golCountHome} : {golCountGuest}</span> <span style={{width:250, textAlign: 'right'}}>{guestTeam}</span>
      </li>
    }
    if (status === 'SCHEDULED') {
      const date = new Date(utcDate);
      const day = date.getDay();
      const month = date.getMonth();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь'];

      return <li className='d-flex justify-content-between border-bottom'><span style={{width:250}}>{homeTeam}</span> <span>{day} {arr[month]} - {hours}:{minutes}</span> <span style={{width:250, textAlign: 'right'}}>{guestTeam}</span></li>
    }

    return (
      <li className='d-flex justify-content-center border-bottom'>{homeTeam} -  {guestTeam}</li>

    )
  }
}

export default Match;
