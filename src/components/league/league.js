import React, {Component} from 'react'
import MatchList from '../match-list';
import { connect } from 'react-redux';
import { LEAGUE, matchListShow } from '../../actionCreators/league/league';
import Spinner from '../spinner';

class League extends Component {

  componentDidMount() {
    const { league, LEAGUE } = this.props;
    LEAGUE(league);
  }

  render() {
    const { show, isLoading, matchList, matchListShow, error, errorMessage} = this.props;
    if (isLoading) {
      return (<Spinner/>);
    }
    if  ( error ) return <div>{errorMessage}</div>;
    const  { competition: {name}, matches}  = matchList;
    const buttonText = show ? 'Hide Matches' : 'Show Matches';
    const isShow = show ? <MatchList
      matches={matches}
      isLoading={isLoading}
    /> : null;
    return(
      <ul className="list-group">
        <li className="list-group-item">
          <h2>{ name }</h2>
          <button className='btn btn-primary' onClick={ matchListShow }>{buttonText}</button>
          {isShow}
        </li>
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  matchList: state.league.data,
  isLoading: state.league.loading,
  loading: state.league.loading,
  show: state.league.showLastsMatches,
  error: state.league.error,
  errorMessage: state.league.errorMessage
});

const mapDispatchToProps = {
  matchListShow,
  LEAGUE
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
