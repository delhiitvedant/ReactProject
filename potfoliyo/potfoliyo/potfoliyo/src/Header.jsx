import React from 'react';
import { Link } from 'react-router-dom';
import image from './image/1.png';

const Header = () => {
  return (
    <header className="header">
      {/* <img style={{ width}} src={image} alt ="profile" /> */}
      <h1  style={{ color: '#3f6be4ff' }}>Anand Sharma</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
