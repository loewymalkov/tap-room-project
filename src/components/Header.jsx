import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
  backgroundColor: '#566573 '
};

const linkStyles = {
  color: '#FFF'
};

function Header() {
  return (
    <div style={headerStyles} >
      <style jsx>{`

        ul {
          list-style-type: none;
          margin: 10;
          padding: 20;
          overflow: hidden;
        }

        li {
          float: left;
          border-right: 1px solid white;
          color: white;
        }

        .left {
          float: left;
        }

        li a {
          display: block;
          text-align: center;
          padding: 20px 110px;
          text-decoration: none;
        }

        li a:hover {
          background-color: #5499C7;
        }

      `}</style>

      <ul>
        <li><a><Link style={linkStyles} to="/">About Us</Link></a></li>
        <li><a><Link style={linkStyles} to="/keglist">List of kegs</Link></a></li>
        <li><a><Link style={linkStyles} to="/newkeg">Add a new keg</Link></a></li>
      </ul> 
    </div>
  );
}

export default Header;