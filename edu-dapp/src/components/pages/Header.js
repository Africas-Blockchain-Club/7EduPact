import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{display: 'flex', justifyContent: 'flex-start', width: '100%', background: '#f5f5f5', padding: '10px 0'}}>
      <div style={{marginLeft: '20px'}}>
        <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
          7EduPact
        </Link>
      </div>
    </header>
  );
}

export default Header;
