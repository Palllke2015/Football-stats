import React, { Component } from 'react'
import CallApi from "../../services/callApi";
import Match from '../match'
import Spinner from "../spinner";

class MatchList extends Component {
  state = {
    result: {
      matches: [{
        utcDate: '',
        matchday: null
      }]
    },
    isLoading: true
  };
  CallApi = new CallApi();
  componentDidMount() {
    this.CallApi
      .getMatchList('PL')
      .then((result) => this.setState({result, isLoading: false}))
      .catch(error => console.log(error.message))
  }

  render() {
    if (this.state.isLoading) {
      return (
        <ul>
          <Spinner />
        </ul>
      )
    }
    const { matches } = this.state.result;
    const result = matches.sort((a, b)=> {
      if (a.utcDate < b.utcDate) {
        return -1
      }
      if (a.utcDate > b.utcDate) {
        return 1
      }
      return 0
    });
    const wasMatches = result.filter((elem) => elem.status === 'FINISHED').reverse().splice(0, 10).reverse().map((elem) => {
      return  <Match key={elem.id} info={elem} />
    });
    const willBeMatches =  result.filter((elem) => elem.status === 'SCHEDULED').splice(0, 10).map((elem) => {
      return  <Match key={elem.id} info={elem} />
    });
    return(
      <div>
        <h2>Match List</h2>
        <ul className='list-group'>
          {wasMatches}
          {willBeMatches}
        </ul>
      </div>
    )
  }
}


export  default MatchList;
