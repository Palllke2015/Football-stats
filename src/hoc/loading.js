import React, { Component } from 'react'
import { connect } from "react-redux";

function WithLoading(Wrapped) {
  class loading extends Component {

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
  return connect(props)(loading);

}

export default WithLoading;
