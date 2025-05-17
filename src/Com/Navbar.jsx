import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top commonBgColor">
      <div className="container-fluid">
        {/* Logo */}
        <a
          className="navbar-brand"
          href="/"
          style={{
            color: 'rgb(75, 0, 130)',
            fontWeight: '900',
          }}
        >
          Mythili
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible navbar menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['/', '/about', '/skills', '/work'].map((path, index) => {
              const names = ['Home', 'About', 'Skills', 'Experience'];
              return (
                <li className="nav-item classHover" key={index}>
                  <Link
                    to={path}
                    className="nav-link"
                    style={{
                      color: 'rgb(75, 0, 130)',
                      fontWeight: '900',
                    }}
                  >
                    {names[index]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
