import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchTableStart } from "../actionCreators";

function WithLoading(Wrapped) {
  class loading extends Component {

    componentDidMount() {

    }

    show = () => {
      this.props.fetchTableStart()
    };
    render() {
      if (this.props.isLoading) {
        return (
          <div>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )
      }
      return (<Wrapped />)
    }
  }
  const props = (state) => ({
    isLoading: state.table.loading
  });
  return connect(props, { fetchTableStart })(loading);

}

export default WithLoading;
