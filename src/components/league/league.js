import React, {Component} from 'react';
import { connect } from 'react-redux';
import { LEAGUE, matchListShow } from '../../actionCreators/league/league';
import Spinner from '../spinner';
import LeagueItem from './league-item';
import SelectComponent from '../select';


class League extends Component {

  state = {
    selectedOption: {
      value: 'PL',
      label: 'Premier League'
    }
  };

  componentDidMount() {
    this.loadingLeague();
  }

  loadingLeague = () => {
    const { apiVerified, LEAGUE, competitionId } = this.props;
    const { selectedOption: {value} } = this.state;
    if ( competitionId !== '') {
      return null;
    }
    setTimeout(()=>{
      if (apiVerified !== '') {
        LEAGUE(value)
      } else {
        this.loadingLeague()
      }
    }, 500);
  };

  handleMatchListShow = () => {
    this.props.matchListShow()
  };

  render() {
    const { show, isLoading, matchList:{ competition: {name}, matches },  error, errorMessage} = this.props;
    if (isLoading) {
      return (<Spinner/>);
    }
    if  ( error ) return <div>{errorMessage}</div>;

    return(
      <div>
        <SelectComponent />

      <LeagueItem
        matchListShow={this.handleMatchListShow}
        name={name}
        show={show}
        matches={matches}
        isLoading={isLoading}
      />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  matchList: state.league.data,
  competitionId: state.league.data.competition.id,
  isLoading: state.league.loading,
  loading: state.league.loading,
  show: state.league.showLastsMatches,
  error: state.league.error,
  errorMessage: state.league.errorMessage,
  leagueCode: state.select.value,
  apiVerified: state.apiVerified.XAuthToken
});

const mapDispatchToProps = {
  matchListShow,
  LEAGUE
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
