import React from 'react'
import { NavLink } from "react-router-dom";
import './style.css'

export default function Header() {
  return(
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="is-active" to="/">Home</NavLink >
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/last-matches">Last Matches</NavLink >
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/table">table</NavLink >
          </li>
        </ul>
      </nav>

  )
}
