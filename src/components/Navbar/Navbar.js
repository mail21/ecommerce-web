import React from 'react';
import Logo from './../../assets/poushoes-logo.png';
import CartIcon from './../CartIcon/CartIcon';

import './navbar.styles.scss';

function Navbar() {
  console.log(Logo);
  return (
    <nav>
      <img src={Logo} alt="logo awal" />
      <ul>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Checkout</a>
          <CartIcon />
        </li>
        <li>
          <a href="">LOGIN</a>
        </li>
        <li>
          <a href="">DAFTAR</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
