import React, {Component} from 'react'
import MatchList from "../match-list";
import { connect } from 'react-redux';
import { fetchMatchList, matchListShow } from "../../actionCreators";
import Spinner from "../spinner";

class League extends Component {

  componentDidMount() {
    const { fetchMatchList, league } = this.props;
    fetchMatchList(league);
  }

  render() {
    const { show, isLoading, matchList, matchListShow} = this.props;
    if (isLoading) {
      return (<Spinner/>)
    }
    const  { competition: {name}, matches}  = matchList;
    const buttonText = show ? 'Hide Matches' : 'Show Matches';
    const isShow = show ? <MatchList
      matches={matches}
      isLoading={isLoading}
    /> : null;
    return(
      <ul className="list-group">
        <li className="list-group-item">
          <h2>{ name }</h2>
          <button className='btn btn-primary' onClick={()=> {
            matchListShow()
          }}>{buttonText}</button>
          {isShow}
        </li>
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  matchList: state.matchList.data,
  isLoading: state.matchList.loading,
  show: state.matchList.show
});

const mapDispatchToProps = {
  fetchMatchList,
  matchListShow
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
