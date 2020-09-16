import React, { useContext } from 'react';
import { ReactComponent as AddToCart } from './../../assets/addtocart.svg';
import { ReactComponent as Hearth } from './../../assets/hearth.svg';
import { Context } from './../../context';
import { actionTypes } from './../../reducer';

import './ProductsCard.scss';
function ProductsCard({ nama, src, like, id }) {
  const [state, dispatch] = useContext(Context);

  const clickLike = () => {
    dispatch({
      type: actionTypes.CLICK_LIKE,
      payload: { id: id, like: !like },
    });
  };

  return (
    <div className="card">
      {/* <div
        style={{
          backgroundImage: `url("https://images-na.ssl-images-amazon.com/images/I/61Nh8BmRvoL.__AC_SY395_QL70_ML2_.jpg")`,
        }}
        className="card-image"
      /> */}
      {/* <img src={src} alt="Sepatu kets" width="400" height="250" /> */}
      <img src={src} className="card-image" alt="Sepatu kets" width="350" height="220" />
      <div className="card-desc">
        <span>{nama}</span>
        <div>
          <AddToCart className="card--addtocart" />
          <Hearth
            className="card--hearth"
            style={like ? { fill: 'red', transform: 'scale(1.2)' } : { fill: 'lightgray' }}
            onClick={clickLike}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
