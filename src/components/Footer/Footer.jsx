import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: '#ffff',
        padding: '0 4rem',
      }}
    >
      <div
        className="footer-contents-items"
        style={{
          borderTop: 'solid gray',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.3rem'
        }}
      >
        <div className="bsite">
          <h1>BSITE</h1>
        </div>

        <div className="footer-socials">
          <h2>LET'S CONNECT</h2>
          <div className="social-platforms">
            <i className="material-icons">facebook</i>
            <i className="material-icons">email</i>
            <i className="material-icons">smart_display</i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
