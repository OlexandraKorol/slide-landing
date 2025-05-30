import React from 'react';
import './Header.css';
import Button from "../../ui/Button/Button"
import Logo from '../../../assets/logo.svg';

export  const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="header__content">
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="header__actions">
            <Button variant="secondary">Request a Demo</Button>
            <Button>Start for Free</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

