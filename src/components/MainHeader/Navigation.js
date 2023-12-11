import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import Context from '../Context';


const Navigation = (props) => {

  const ctx = useContext(Context)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.loggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.loggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.loggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
