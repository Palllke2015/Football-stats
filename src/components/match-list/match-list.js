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
    const { currentMatchday } = this.props;
    const FilteredMatch = matches.filter((elem) => elem.matchday === currentMatchday - 1)
      .map((elem) => {
        return(
          <Match key={elem.id} info={elem} />
        )
      });

    return(
      <div>
        <h2>League</h2>
        <ul className='list-group'>
          {FilteredMatch}
        </ul>
      </div>
    )
  }
}


export  default MatchList;
