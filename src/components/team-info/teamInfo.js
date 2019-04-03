import React, {Component} from 'react'


class TeamInfo extends Component{

  render() {
    const { matchList: {matches}, teamId } = this.props;
    const result = matches.sort((a,b) => {
      if (a.utcDate < b.utcDate) {
        return -1
      }
      if (a.utcDate > b.utcDate) {
        return 1
      }
      return 0
    });
    console.log(result.filter((elem) => elem.status === 'FINISHED').reverse().slice(0,5).reverse())
    const lastMatches = result.filter((elem) => elem.status === 'FINISHED').reverse().slice(0,5).reverse().map((elem)=> {
      if (elem.score.winner === "DRAW") {
        return <li key={elem.id}>DRAW</li>
      }
      if (elem.homeTeam.id === teamId && elem.score.winner === 'HOME_TEAM') {
        return <li key={elem.id}>W</li>
      }
      if (elem.awayTeam.id === teamId && elem.score.winner === 'AWAY_TEAM') {
        return <li key={elem.id}>W</li>
      }
      return <li key={elem.id}>L</li>
    });


    const nextMatches = result.filter((elem) => elem.status === 'SCHEDULED').slice(0,5).map((elem)=> {
      let currentTeam;
      let enemyTeam;

      if (elem.homeTeam.id === teamId) {
        currentTeam = elem.homeTeam.name;
        enemyTeam = elem.awayTeam.name;
      }
      if (elem.awayTeam.id === teamId) {
        enemyTeam = elem.homeTeam.name;
        currentTeam = elem.awayTeam.name;
      }
      return(
        <li key={elem.id}><span>{currentTeam}</span> {new Date(elem.utcDate).toLocaleString()} <span>{enemyTeam}</span></li>
      )
    });
    return(
      <div>
        <h2>Last Matches</h2>
        <ul>
          {lastMatches}
        </ul>


        <h2>Next Matches</h2>
        <ul>
          {nextMatches}
        </ul>

      </div>
    )
  }
}



export default TeamInfo;
