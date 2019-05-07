import React from 'react'

const WithLoading = (Wrapped) => {
  return (props) => {
    if (props.loading) {
      return (
        <div>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    return(
      <Wrapped  {...props}/>
    )
  }
};

export default WithLoading;
