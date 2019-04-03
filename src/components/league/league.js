import React, {Component} from 'react'
import MatchList from "../match-list";
import { connect } from 'react-redux';
import { SHOW_MATCH_LIST, DISPATCH_ACTION } from "../../actionCreators";
import Spinner from '../spinner'

class League extends Component {

  componentDidMount() {
    const { DISPATCH_ACTION } = this.props;
    DISPATCH_ACTION(`competitions/2021/standings`, 'FETCH_TOURNAMENT_TABLE');

  }

  render() {
    const { isLoading = true , SHOW_MATCH_LIST, DISPATCH_ACTION,  matchList: list, leagueInfo } = this.props;
    if (leagueInfo === undefined || leagueInfo === null ) {
      return <li className="list-group-item">
        <Spinner />
      </li>
    }
    const { competition:{ name, code}} = leagueInfo

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
      <div>
        <li className="list-group-item">
          <h2>{ name }</h2>
          <button className='btn btn-primary' onClick={showMatchList}>{buttonText}</button>
          {matchList}
        </li>
      </div>
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
