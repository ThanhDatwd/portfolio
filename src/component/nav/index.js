import React, { useState, useEffect } from 'react';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav__container">
        <a href="#home" className="nav__logo" onClick={() => setActiveNav('#home')}>
          <span className="logo__icon">TD</span>
        </a>
        <div className="nav__links">
          <a
            href="#home"
            className={activeNav === '#' ? 'active' : ''}
            onClick={() => setActiveNav('#home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeNav === '#about' ? 'active' : ''}
            onClick={() => setActiveNav('#about')}
          >
            About
          </a>
          <a
            href="#experience"
            className={activeNav === '#experience' ? 'active' : ''}
            onClick={() => setActiveNav('#experience')}
          >
            Experience
          </a>
          <a
            href="#project"
            className={activeNav === '#project' ? 'active' : ''}
            onClick={() => setActiveNav('#project')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeNav === '#contact' ? 'active' : ''}
            onClick={() => setActiveNav('#contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
