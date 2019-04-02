import React, {Component} from 'react'
import CallApi from "../../services/callApi";
import MatchList from "../match-list";
import { connect } from 'react-redux';
import { SHOW_MATCH_LIST, DISPATCH_ACTION } from "../../actionCreators";
import Spinner from '../spinner'

class League extends Component {
  state = {
    data:{
      code: '',
      currentSeason: {
        currentMatchday: null
      }
    },
    isLoading: true
  };

  CallApi = new CallApi();
  componentDidMount() {
    this.CallApi
      .getCompetitions('PL')
      .then((data) => this.setState({data, isLoading:false}))
      .catch((error) => console.log(error.message));
  }

  render() {
    const { isLoading , SHOW_MATCH_LIST, DISPATCH_ACTION,  matchList: list} = this.props;
    const { name, code } = this.state.data;
    const matchList = isLoading ? null : <MatchList
      matches={list}
      isLoading={isLoading}
    />;
    const buttonText = isLoading ? 'Show Matches': 'Hide Matches';

    const showMatchList = () => {
      SHOW_MATCH_LIST();
      DISPATCH_ACTION(`competitions/${code}/matches`, 'SHOW_MATCH_LIST');
    };

    if (this.state.isLoading) {
      return (
        <li className="list-group-item">
          <Spinner />
        </li>
        )
    }
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
});

const mapDispatchToProps = {
  SHOW_MATCH_LIST,
  DISPATCH_ACTION
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
