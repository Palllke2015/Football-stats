import React from 'react';
import MatchList from "../../match-list";

export default function LeagueItem({matchListShow, name, show, matches, isLoading}) {
  const isShow = show ? <MatchList
    matches={matches}
    isLoading={isLoading}
  /> : null;
  return(
    <ul className="list-group">
      <li className="list-group-item">
        <h2>{ name }</h2>
        <button className='btn btn-primary' onClick={ matchListShow }>{show ? 'Hide Matches' : 'Show Matches'}</button>
        {isShow}
      </li>
    </ul>
  )
}
