import React from 'react';

const HeroIllustration = () => (
  <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="header__illustration">
    {/* Monitor */}
    <g className="hero-float">
      <rect x="120" y="80" width="260" height="180" rx="12" fill="#fff" stroke="#6c5ce7" strokeWidth="2"/>
      <rect x="132" y="92" width="236" height="145" rx="4" fill="#f0f2f9"/>
      {/* Code lines */}
      <rect x="148" y="110" width="60" height="6" rx="3" fill="#6c5ce7" opacity="0.7"/>
      <rect x="148" y="124" width="90" height="6" rx="3" fill="#a29bfe" opacity="0.5"/>
      <rect x="148" y="138" width="45" height="6" rx="3" fill="#00cec9" opacity="0.6"/>
      <rect x="200" y="138" width="70" height="6" rx="3" fill="#6c5ce7" opacity="0.4"/>
      <rect x="148" y="152" width="80" height="6" rx="3" fill="#fab1a0" opacity="0.5"/>
      <rect x="148" y="166" width="55" height="6" rx="3" fill="#a29bfe" opacity="0.6"/>
      <rect x="210" y="166" width="40" height="6" rx="3" fill="#00cec9" opacity="0.4"/>
      <rect x="148" y="180" width="100" height="6" rx="3" fill="#6c5ce7" opacity="0.3"/>
      <rect x="148" y="194" width="35" height="6" rx="3" fill="#fab1a0" opacity="0.4"/>
      <rect x="190" y="194" width="65" height="6" rx="3" fill="#a29bfe" opacity="0.5"/>
      {/* Terminal dots */}
      <circle cx="330" cy="108" r="4" fill="#ff6b6b" opacity="0.8"/>
      <circle cx="344" cy="108" r="4" fill="#feca57" opacity="0.8"/>
      <circle cx="358" cy="108" r="4" fill="#48dbfb" opacity="0.8"/>
      {/* Right panel */}
      <rect x="310" y="124" width="48" height="40" rx="4" fill="#6c5ce7" opacity="0.1"/>
      <rect x="318" y="132" width="32" height="4" rx="2" fill="#6c5ce7" opacity="0.3"/>
      <rect x="318" y="142" width="24" height="4" rx="2" fill="#a29bfe" opacity="0.3"/>
      <rect x="318" y="152" width="28" height="4" rx="2" fill="#00cec9" opacity="0.3"/>
      {/* Monitor stand */}
      <rect x="225" y="260" width="50" height="12" rx="2" fill="#dfe6e9"/>
      <rect x="235" y="254" width="30" height="8" rx="1" fill="#b2bec3"/>
      {/* Monitor base */}
      <ellipse cx="250" cy="275" rx="45" ry="6" fill="#dfe6e9"/>
    </g>

    {/* Keyboard */}
    <g className="hero-float-delay">
      <rect x="170" y="290" width="160" height="50" rx="8" fill="#fff" stroke="#dfe6e9" strokeWidth="1.5"/>
      {/* Keys */}
      {[0,1,2,3,4,5,6,7].map((i) => (
        <rect key={`k1-${i}`} x={182 + i * 18} y="300" width="12" height="10" rx="2" fill="#f0f2f9" stroke="#dfe6e9" strokeWidth="0.5"/>
      ))}
      {[0,1,2,3,4,5,6].map((i) => (
        <rect key={`k2-${i}`} x={190 + i * 18} y="316" width="12" height="10" rx="2" fill="#f0f2f9" stroke="#dfe6e9" strokeWidth="0.5"/>
      ))}
      <rect x="208" y="330" width="80" height="6" rx="2" fill="#f0f2f9" stroke="#dfe6e9" strokeWidth="0.5"/>
    </g>

    {/* Floating elements */}
    {/* React logo */}
    <g className="hero-orbit" style={{ transformOrigin: '80px 140px' }}>
      <circle cx="80" cy="140" r="22" fill="#61DAFB" opacity="0.15"/>
      <circle cx="80" cy="140" r="6" fill="#61DAFB"/>
      <ellipse cx="80" cy="140" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <ellipse cx="80" cy="140" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" opacity="0.6" transform="rotate(60 80 140)"/>
      <ellipse cx="80" cy="140" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" opacity="0.6" transform="rotate(120 80 140)"/>
    </g>

    {/* TypeScript badge */}
    <g className="hero-float-slow">
      <rect x="400" y="120" width="44" height="44" rx="8" fill="#3178C6"/>
      <text x="422" y="149" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">TS</text>
    </g>

    {/* Git branch */}
    <g className="hero-float-delay">
      <circle cx="420" cy="240" r="20" fill="#f0f2f9" stroke="#e8ecf4" strokeWidth="1.5"/>
      <circle cx="413" cy="234" r="4" fill="#6c5ce7"/>
      <circle cx="427" cy="234" r="4" fill="#00cec9"/>
      <circle cx="420" cy="248" r="4" fill="#fab1a0"/>
      <line x1="413" y1="238" x2="420" y2="244" stroke="#636e72" strokeWidth="1.5"/>
      <line x1="427" y1="238" x2="420" y2="244" stroke="#636e72" strokeWidth="1.5"/>
    </g>

    {/* Coffee cup */}
    <g className="hero-float-slow">
      <rect x="60" y="260" width="35" height="40" rx="4" fill="#fff" stroke="#dfe6e9" strokeWidth="1.5"/>
      <path d="M95 272 C105 272 108 285 95 288" stroke="#dfe6e9" strokeWidth="1.5" fill="none"/>
      <path d="M68 262 C70 254 72 256 74 262" stroke="#b2bec3" strokeWidth="1.5" fill="none" opacity="0.5" className="hero-steam"/>
      <path d="M78 260 C80 252 82 254 84 260" stroke="#b2bec3" strokeWidth="1.5" fill="none" opacity="0.4" className="hero-steam-delay"/>
    </g>

    {/* Floating dots decoration */}
    <circle cx="400" cy="350" r="5" fill="#6c5ce7" opacity="0.2" className="hero-pulse"/>
    <circle cx="90" cy="200" r="4" fill="#00cec9" opacity="0.3" className="hero-pulse-delay"/>
    <circle cx="430" cy="180" r="3" fill="#fab1a0" opacity="0.3" className="hero-pulse"/>
    <circle cx="60" cy="330" r="6" fill="#a29bfe" opacity="0.15" className="hero-pulse-delay"/>

    {/* Bracket decorations */}
    <text x="50" y="370" fill="#6c5ce7" opacity="0.12" fontSize="48" fontWeight="700" fontFamily="monospace">{'{'}</text>
    <text x="420" y="400" fill="#6c5ce7" opacity="0.12" fontSize="48" fontWeight="700" fontFamily="monospace">{'}'}</text>
    <text x="370" y="80" fill="#00cec9" opacity="0.1" fontSize="30" fontWeight="700" fontFamily="monospace">{'</>'}</text>
  </svg>
);

export default HeroIllustration;
