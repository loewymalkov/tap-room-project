import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

function Header() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper" style={{backgroundColor: '#566573'}}>
          <a href='/' className="brand-logo">TAP ROOM</a>
          <ul id='nav-mobile' className="right hide-on-med-and-down" style={{backgroundColor: '#566573'}}>
            <li><a href='#/keglist'>Keg Hub</a></li>
            <li><a href='#/newkeg'>Add a Keg</a></li>
          </ul> 
        </div>
      </nav>
    </div>
  );
}

export default Header;