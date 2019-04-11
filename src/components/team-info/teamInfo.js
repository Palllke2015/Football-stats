import React, {Component} from 'react'


class TeamInfo extends Component{

  render() {
    const { matchList: {matches}, teamName } = this.props;
    const result = matches.sort((a,b) => {
      if (a.utcDate < b.utcDate) {
        return -1
      }
      if (a.utcDate > b.utcDate) {
        return 1
      }
      return 0
    });
    const lastMatches = result.filter((elem) => elem.status === 'FINISHED').reverse().slice(0,5).reverse().map((elem)=> {
      if (elem.score.winner === "DRAW") {
        return <li key={elem.id}>DRAW {elem.competition.name}</li>
      }
      if (elem.homeTeam.name === teamName && elem.score.winner === 'HOME_TEAM') {
        return <li key={elem.id}>W {elem.competition.name}</li>
      }
      if (elem.awayTeam.name === teamName && elem.score.winner === 'AWAY_TEAM') {
        return <li key={elem.id}>W {elem.competition.name}</li>
      }
      return <li key={elem.id}>L {elem.competition.name}</li>
    });


    const nextMatches = result.filter((elem) => elem.status === 'SCHEDULED').slice(0,5).map((elem)=> {
      let currentTeam;
      let enemyTeam;

      if (elem.homeTeam.name === teamName) {
        currentTeam = elem.homeTeam.name;
        enemyTeam = elem.awayTeam.name;
      }
      if (elem.awayTeam.name === teamName) {
        enemyTeam = elem.homeTeam.name;
        currentTeam = elem.awayTeam.name;
      }
      return(
        <li key={elem.id}><span>{currentTeam}</span> {new Date(elem.utcDate).toLocaleString()} <span>{enemyTeam}</span> {elem.competition.name}</li>
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
