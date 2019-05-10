import React from 'react'

function WithLoading(Wrapped) {
  return (props) => {
    if (props.loading) {
      return (
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
    return(
      <Wrapped {...props} />
    )
  }
}

export default WithLoading;
