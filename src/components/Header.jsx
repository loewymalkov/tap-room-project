import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
  backgroundColor: 'grey'
};

function Header() {
  return (
    <div style={headerStyles} >
      <h1>the bestest header of all the headers</h1>
      <Link to="/about">About Us</Link> | <Link to="/keglist">List of Kegs</Link>
    </div>
  );
}

export default Header;