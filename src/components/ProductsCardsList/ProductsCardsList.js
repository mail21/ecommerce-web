import React, { useContext } from 'react';
import ProductsCard from './../ProductsCard/ProductsCard';
import SHOES_DATA from './../../SHOES_DATA';
import { Context } from './../../context';

function ProductsCardsList({ isFavouriteClick }) {
  const [state] = useContext(Context);
  return (
    <>
      {isFavouriteClick
        ? state.liked_shoes.map((shoes, index) => (
            <ProductsCard
              key={index}
              id={index}
              nama={shoes.nama}
              src={shoes.src}
              like={false}
            />
          ))
        : state.shoes_data.map((shoes, index) => (
            <ProductsCard
              key={index}
              id={index}
              nama={shoes.nama}
              src={shoes.src}
              like={false}
            />
          ))}
    </>
  );
}

export default ProductsCardsList;
