import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg">
      <div className="container">
        <h1 className="navbar-brand">DQLNHS Basketball Development</h1>
        <nav className="navbar-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/equipment" className="nav-link">Equipments</Link>
            </li>
            <li className="nav-item">
              <Link to="/strategies" className="nav-link">Strategies</Link>
            </li>
            <li className="nav-item">
              <Link to="/facility" className="nav-link">Facility</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
