import React from 'react';
import { ReactComponent as AddToCart } from './../../assets/addtocart.svg';
import { ReactComponent as Hearth } from './../../assets/hearth.svg';
import './ProductsCard.scss';
function ProductsCard() {
  let src =
    'https://cdn.shopify.com/s/files/1/0076/8812/6522/products/slate8_1024x1024.jpg?v=1587464943';
  return (
    <div className="card">
      {/* <div
        style={{
          backgroundImage: `url("https://images-na.ssl-images-amazon.com/images/I/61Nh8BmRvoL.__AC_SY395_QL70_ML2_.jpg")`,
        }}
        className="card-image"
      /> */}
      {/* <img src={src} alt="Sepatu kets" width="400" height="250" /> */}
      <img src={src} alt="Sepatu kets" width="350" height="220" />
      <div className="card-desc">
        <span>Mesh Slip On Air Cushion</span>
        <div>
          <AddToCart className="card--addtocart" />
          <Hearth className="card--hearth" />
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
