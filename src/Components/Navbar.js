// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function Navbar({ title, mode, toggleMode, logo }) {
  return (
    <BootstrapNavbar bg={mode} variant={mode} expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          {logo ? (
            <img src={logo} alt="Logo" height="70" className="d-inline-block align-top" />
          ) : (
            title
          )}
        </Link>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <div className="form-check form-switch">
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
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
