import React, {Component} from 'react'
import MatchList from "../match-list";
import { connect } from 'react-redux';
import { SHOW_MATCH_LIST } from "../../actionCreators";
import Spinner from '../spinner'

class League extends Component {



  render() {
    const { isLoading = true , SHOW_MATCH_LIST,  matchList: list, leagueInfo } = this.props;
    if (leagueInfo === undefined || leagueInfo === null ) {
      return <li className="list-group-item">
        <Spinner />
      </li>
    }
    const { competition:{ name }} = leagueInfo;

    const matchList = isLoading ? null : <MatchList
      matches={list}
      isLoading={isLoading}
    />;
    const buttonText = isLoading ? 'Show Matches': 'Hide Matches';

    const showMatchList = () => {
      SHOW_MATCH_LIST();
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
  SHOW_MATCH_LIST
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
