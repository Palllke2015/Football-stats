import React , { Component }from 'react'
import { connect } from 'react-redux';

import League from './league'
import Modal from './modal'


class FootBall extends Component {

    render() {
      return (
        <div>
          <ul className="list-group">
            <League/>
            <li className="list-group-item">Premier League</li>
          </ul>


          <div className="custom-modal-wrapper">
            <Modal />
          </div>
        </div>

      )
    }
}


export default connect()(FootBall);
