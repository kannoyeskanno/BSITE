import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <h1 className="navbar-brand">DQLNHS Basketball Development</h1>
        <nav className="navbar-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/assessment" className="nav-link">Assessment</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
