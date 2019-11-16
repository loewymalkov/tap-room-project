import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
  backgroundColor: '#85C1E9'
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
          border-right: 1px solid #bbb;
        }

        .left {
          float: left;
        }

        li a {
          display: block;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        li a:hover {
          background-color: #A3E4D7;
        }


      `}</style>
      <ul>
        <li><a><Link to="/about">About Us</Link></a></li>
        <li><a><Link to="/keglist">List of Kegs</Link></a></li>
        <li><a><Link to="/newkeg">Add a new Keg</Link></a></li>
      </ul> 
    </div>
  );
}

export default Header;