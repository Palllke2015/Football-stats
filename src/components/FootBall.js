import React , { Component }from 'react'
import { connect } from 'react-redux';


import League from './league'
import Modal from './modal'
import Table from './table'


class FootBall extends Component {

    render() {
      const { showLastsMatches } = this.props;
      const modal = showLastsMatches ? <div className="custom-modal-wrapper">
        <Modal />
      </div> : null;
      return (
        <div>
          <ul className="list-group">
            <League/>
            <li className="list-group-item">Premier League</li>
          </ul>
          { modal }

        <Table />
        </div>

      )
    }
}
const mapStateToProps = (state) => ({
  showLastsMatches: state.league.showLastsMatches
});


export default connect(mapStateToProps)(FootBall);
