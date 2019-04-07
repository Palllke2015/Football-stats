import React, {Component} from 'react'
import MatchList from "../match-list";
import { connect } from 'react-redux';
import { SHOW_MATCH_LIST, DISPATCH_ACTION } from "../../actionCreators";
import Spinner from '../spinner'

class League extends Component {



  render() {
    const { isLoading = true , SHOW_MATCH_LIST, DISPATCH_ACTION,  matchList: list, leagueInfo } = this.props;
    if (leagueInfo === undefined || leagueInfo === null ) {
      return <li className="list-group-item">
        <Spinner />
      </li>
    }
    const { leagueInfo : {competition:{ name, code}}} = this.props

    const matchList = isLoading ? null : <MatchList
      matches={list}
      isLoading={isLoading}
    />;
    const buttonText = isLoading ? 'Show Matches': 'Hide Matches';

    const showMatchList = () => {
      SHOW_MATCH_LIST();
      DISPATCH_ACTION(`competitions/${code}/matches`, 'SHOW_MATCH_LIST');
    };

    return(
      <ul className="list-group">
        <li className="list-group-item">
          <h2>{ name }</h2>
          <button className='btn btn-primary' onClick={showMatchList}>{buttonText}</button>
          {matchList}
        </li>
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  matchList: state.league.matchListShow.list,
  isLoading: state.league.matchListShow.isLoading,
  leagueInfo: state.league.tournamentTable
});

const mapDispatchToProps = {
  SHOW_MATCH_LIST,
  DISPATCH_ACTION
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
