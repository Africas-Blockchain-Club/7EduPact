import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{display: 'flex', justifyContent: 'space-between', width: '100%', background: '#f5f5f5', padding: '10px 0'}}>
      <div style={{marginLeft: '20px'}}>
        <Link to="/about" style={{textDecoration: 'none', color: 'black'}}>
          About Us
        </Link>
      </div>
      <div style={{marginRight: '20px'}}>
        <Link to="/contact" style={{textDecoration: 'none', color: 'black'}}>
          Contact
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
