import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Student Info App</h1>
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/students" className="nav-link">Students</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
