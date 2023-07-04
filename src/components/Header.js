import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div>
      <nav className="nav-header">
        <div className="nav-content">
          <img className="website-logo" src="/images/dataloop.png" alt="website logo" style={{ width: '50px', marginLeft: '50px' }} />
          <ul className="nav-menu">
            <li className="dropdown">
              <Link to="/" className="nav-link" style={{ marginLeft: '320px' }}>Platform</Link>
              <div className="dropdown-content">
                <Link to="/">Link 1</Link>
                <Link to="/">Link 2</Link>
                <Link to="/">Link 3</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/products" className="nav-link" style={{ marginLeft: '40px' }}>Solutions</Link>
              <div className="dropdown-content">
                <Link to="/products">Product 1</Link>
                <Link to="/products">Product 2</Link>
                <Link to="/products">Product 3</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/cart" className="nav-link" style={{ marginLeft: '40px' }}>Developers</Link>
              <div className="dropdown-content">
                <Link to="/cart">Link 1</Link>
                <Link to="/cart">Link 2</Link>
                <Link to="/cart">Link 3</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/cart" className="nav-link" style={{ marginLeft: '40px' }}>Company</Link>
              <div className="dropdown-content">
                <Link to="/cart">Link 1</Link>
                <Link to="/cart">Link 2</Link>
                <Link to="/cart">Link 3</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/cart" className="nav-link" style={{ marginLeft: '40px' }}>Resources</Link>
              <div className="dropdown-content">
                <Link to="/cart">Link 1</Link>
                <Link to="/cart">Link 2</Link>
                <Link to="/cart">Link 3</Link>
              </div>
            </li>
            <li>
              <Link to="/cart" className="nav-link" style={{ marginLeft: '70px' }}>Sign In</Link>
            </li>
          </ul>
          <button type="button" className="logout-desktop-btn">
            Book A Demo
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
