import React from 'react';
import { ReactComponent as ShoppingBag } from './../../assets/shopping-bag.svg';
import './CartIcon.scss';

function CartIcon() {
  return (
    <div className="cart-icon">
      <ShoppingBag className="icon-img" />
      <span>0</span>
    </div>
  );
}

export default CartIcon;
