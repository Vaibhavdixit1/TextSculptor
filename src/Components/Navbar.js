// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ title, mode, toggleMode, logo }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {logo ? (
            <img src={logo} alt="Logo" height="70" className="d-inline-block align-top" />
          ) : (
            title
          )}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto"> {/* Center-align the navigation links */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="form-check form-switch" style={{ marginLeft: 'auto' }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              checked={mode === 'dark'}
              onChange={toggleMode}
            />
            <label className={`form-check-label text-${mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
              {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
