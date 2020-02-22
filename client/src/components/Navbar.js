import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
        <span href="/" className="brand-logo">Shorting links</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/" onClick={logoutHandler}>Sign out</a></li>
        </ul>
      </div>
    </nav>

  );
};
