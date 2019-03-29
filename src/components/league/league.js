import React, {Component} from 'react'
import CallApi from "../../services/callApi";
import MatchList from "../match-list";
import { connect } from 'react-redux';
import { SHOW_MATCH_LIST, DISPATCH_ACTION } from "../../actionCreators";
import Spinner from '../spinner'

class League extends Component {
  state = {
    data:{
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
    const { matchListShow, SHOW_MATCH_LIST, DISPATCH_ACTION } = this.props;
    const { name, currentSeason: { currentMatchday } } = this.state.data;
    const matchList = matchListShow ? <MatchList currentMatchday={currentMatchday} /> : null;
    const buttonText = matchListShow ? 'Hide Matches' : 'Show Matches';


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
          <button className='btn btn-primary' onClick={SHOW_MATCH_LIST}>{buttonText}</button>
          <button className='btn btn-primary' onClick={ DISPATCH_ACTION }>DISPATCH_ACTION</button>
          {matchList}
        </li>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  matchListShow: state.league.matchListShow
});

const mapDispatchToProps = {
  SHOW_MATCH_LIST,
  DISPATCH_ACTION
}

export default connect(mapStateToProps, mapDispatchToProps)(League);
