import React from 'react'

function WithLoading(Wrapped) {
  return () => {
    return (<Wrapped />)
  }
  
}

export default WithLoading;
