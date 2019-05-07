import React, { Component } from 'react'
import Match from '../match'

import Spinner from '../spinner';


class MatchList extends Component {
  render() {
    const {matches, isLoading} = this.props;
    if (isLoading) {
      return (
        <ul>
          <Spinner />
        </ul>
      )
    }

    const result = matches.sort((a, b)=> {
      if (a.utcDate < b.utcDate) {
        return -1;
      }
      if (a.utcDate > b.utcDate) {
        return 1;
      }
      return 0;
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
  };
}

export default MatchList;
