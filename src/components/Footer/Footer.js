import React from 'react';
import logo from './../../assets/poushoes-logo.png';

import './Footer.scss';
function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" className="footer-image" />
      <span className="footer-span">© 2020 Poe Shoues. All Rights Reserved.</span>
    </footer>
  );
}

export default Footer;
