import React from 'react'

const WithLoading = () => (Wrapped) =>{

  return() => {
    return (
      <div>
        <h2>lol</h2>
        <Wrapped />
      </div>

      )
  }
};

export default WithLoading;
