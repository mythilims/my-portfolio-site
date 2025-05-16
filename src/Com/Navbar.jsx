import React from 'react';
import { Link } from 'react-router-dom'; // For smooth scrolling to sections
import './Common.css';
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top commonBgColor"
    // style={{ background: ' linear-gradient(90deg, #11998e, #38ef7d) ' }}
    >
      <div className="container-fluid">
        <a style={{
          color: 'rgb(75, 0, 130)',
          fontWeight: '900',
        }} className="navbar-brand" href="/">Mythili</a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item classHover" >
              <Link style={{
                color: 'rgb(75, 0, 130)',
                fontWeight: '900',
              }} className="nav-link" to="/" >Home</Link>

            </li>
            <li className="nav-item classHover">
              <Link style={{
                color: 'rgb(75, 0, 130)',
                fontWeight: '900',
              }} className="nav-link" to="/about">About </Link>

            </li>
            <li className="nav-item classHover">
              <Link style={{
                color: 'rgb(75, 0, 130)',
                fontWeight: '900',
              }} className="nav-link" to="/skills">Skills</Link>

            </li>
            <li className="nav-item classHover">
              <Link style={{
                color: 'rgb(75, 0, 130)',
                fontWeight: '900',
              }} className="nav-link" to="/work">Experience</Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
