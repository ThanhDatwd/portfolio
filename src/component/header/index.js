import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub } from 'react-icons/ai';
import HeroIllustration from './HeroIllustration';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="header__bg-gradient header__bg-gradient--1" />
      <div className="header__bg-gradient header__bg-gradient--2" />
      <div className="header__bg-gradient header__bg-gradient--3" />

      <div className="container header__container">
        <div className="header__intro animate-fadeIn">
          <span className="header__greeting">
            Hello! I Am <span className="text-primary">Thành Đạt</span>
          </span>
        </div>

        <div className="header__main">
          <div className="header__text animate-fadeIn animate-delay-2">
            <h1 className="header__title">
              <TypeAnimation
                sequence={[800, "I'm a Web Developer."]}
                speed={50}
                repeat={0}
                wrapper="span"
                cursor={true}
              />
            </h1>
            <p className="header__bio">
              Frontend Developer with 3+ years of experience delivering web products
              using React, Next.js, and TypeScript. Capable of working independently
              across the full development cycle — from UI implementation to complex
              API integration.
            </p>

            <div className="header__cta">
              <a href="#project" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn">Contact Me</a>
              <div className="header__socials">
                <a href="https://github.com/ThanhDatwd" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="header__visual animate-fadeIn animate-delay-3">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
