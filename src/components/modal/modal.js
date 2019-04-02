import React, {Component} from 'react'
import './style.css'

class Modal extends Component{

  render() {
    return(
      <div className="custom-modal">
        <button className="btn btn-danger custom-modal__button">Close</button>
        <div className="custom-modal__left">

        </div>
        <div className="custom-modal__right">

        </div>
      </div>
    )
  }
}

export default Modal;
