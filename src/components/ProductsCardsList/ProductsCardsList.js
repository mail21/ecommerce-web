import React, { useContext } from 'react';
import ProductsCard from './../ProductsCard/ProductsCard';
import { Context } from './../../context';

function ProductsCardsList({ isFavouriteClick }) {
  const [state] = useContext(Context);
  return (
    <>
      {isFavouriteClick
        ? state.shoes_data.map((shoes, index) => {
            if (shoes.like) {
              return (
                <ProductsCard
                  key={index}
                  id={shoes.id}
                  like={shoes.like}
                  nama={shoes.nama}
                  src={shoes.src}
                />
              );
            }
          })
        : state.shoes_data.map((shoes, index) => (
            <ProductsCard
              key={index}
              id={shoes.id}
              like={shoes.like}
              nama={shoes.nama}
              src={shoes.src}
            />
          ))}
    </>
  );
}

export default ProductsCardsList;
