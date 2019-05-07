import React, {Component} from 'react'
import Spinner from '../spinner';


class TeamInfo extends Component{

  render() {
    const {loading} = this.props;
    if (loading) {
      return <Spinner/>;
    }
    const { matchList: {matches}, teamName } = this.props;

    const result = matches.sort((a,b) => {
      if (a.utcDate < b.utcDate) {
        return -1;
      }
      if (a.utcDate > b.utcDate) {
        return 1;
      }
      return 0;
    });
    const lastMatches = result.filter((elem) => elem.status === 'FINISHED').slice(-5).map((elem)=> {
      const date = new Date(elem.utcDate).toDateString();
      let homeTeam, awayTeam, homeTeamScore, awayTeamScore;
      if (elem.score.winner === 'DRAW') {
        if (elem.homeTeam.name === teamName) {
          homeTeam = elem.homeTeam.name;
          homeTeamScore = elem.score.fullTime.homeTeam;
          awayTeam = elem.awayTeam.name;
          awayTeamScore = elem.score.fullTime.awayTeam;
        }
        if (elem.awayTeam.name === teamName) {
          awayTeam = elem.homeTeam.name;
          awayTeamScore = elem.score.fullTime.homeTeam;
          homeTeam = elem.awayTeam.name;
          homeTeamScore = elem.score.fullTime.awayTeam;
        }
        return <li key={elem.id} style={{background:'grey'}}>{date} - {homeTeam} {homeTeamScore}:{awayTeamScore} {awayTeam}[{elem.competition.name}]</li>
      }
      if (elem.homeTeam.name === teamName && elem.score.winner === 'HOME_TEAM') {
        return <li key={elem.id} style={{background:"green"}}>{date} - {elem.homeTeam.name} {elem.score.fullTime.homeTeam}:{elem.score.fullTime.awayTeam} {elem.awayTeam.name}[{elem.competition.name}]</li>
      }
      if (elem.awayTeam.name === teamName && elem.score.winner === 'AWAY_TEAM') {
        return <li key={elem.id} style={{background:"green"}}>{date} - {elem.awayTeam.name} {elem.score.fullTime.awayTeam}:{elem.score.fullTime.homeTeam} {elem.homeTeam.name}[{elem.competition.name}]</li>
      }
      if (elem.awayTeam.name === teamName && elem.score.winner === 'HOME_TEAM') {
        return <li key={elem.id} style={{background:"red"}}>{date} - {elem.awayTeam.name} {elem.score.fullTime.awayTeam}:{elem.score.fullTime.homeTeam} {elem.homeTeam.name}[{elem.competition.name}]</li>
      }
      if (elem.homeTeam.name === teamName && elem.score.winner === 'AWAY_TEAM') {
        return <li key={elem.id} style={{background:"red"}}>{date} - {elem.homeTeam.name} {elem.score.fullTime.homeTeam}:{elem.score.fullTime.awayTeam} {elem.awayTeam.name}[{elem.competition.name}]</li>
      }

    return null;
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
