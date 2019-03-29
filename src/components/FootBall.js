import React , { Component }from 'react'

import League from './league'

class FootBall extends Component {


    render() {
      return (
        <ul className="list-group">
          <League/>
          <li className="list-group-item">Premier League</li>
        </ul>
      )
    }
}

export default FootBall;
