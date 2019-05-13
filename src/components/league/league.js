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
    const { LEAGUE } = this.props;
    const { selectedOption: {value} } = this.state;
    LEAGUE(value);
  }

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
  isLoading: state.league.loading,
  loading: state.league.loading,
  show: state.league.showLastsMatches,
  error: state.league.error,
  errorMessage: state.league.errorMessage,
  leagueCode: state.select.value
});

const mapDispatchToProps = {
  matchListShow,
  LEAGUE
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
