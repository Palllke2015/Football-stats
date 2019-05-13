import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { IsLogin } from '../../hoc'

function Header() {
  return(
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="is-active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/last-matches">Leagues</NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/table">table</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default IsLogin(Header);
