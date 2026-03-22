import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__line" />
        <div className="footer__content">
          <p className="footer__copy">
            &copy; 2024 Thành Đạt. All rights reserved.
          </p>
          <p className="footer__credit">
            Designed & Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
