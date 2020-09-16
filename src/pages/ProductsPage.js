import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from './../assets/banner.jpg';
import { ReactComponent as Hearth } from './../assets/hearth.svg';
import ProductsCardsList from './../components/ProductsCardsList/ProductsCardsList';
import { Context } from './../context';

import './ProductsPage.scss';

function ProductsPage() {
  const [state] = useContext(Context);
  const [isFavouriteClick, setIsFavouriteClick] = useState(false);
  return (
    <>
      <Navbar />
      <img src={Banner} alt="Banner" style={{ width: '100%', marginBottom: '20' }} />
      <br />
      <main>
        <aside>
          <span>Browse By</span>
          <ul>
            <li>Fashion Pria</li>
            <li>Fashion Wanite</li>
            <li>Fashion Anak</li>
            <li>Olahraga</li>
            <li>Sekolah</li>
          </ul>
          <div className="products--myfavourites">
            <Hearth style={{ marginRight: '10', fill: 'red' }} />
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setIsFavouriteClick((prev) => !prev)}
            >
              My Favourites({state.jmlMyFavourites})
            </span>
          </div>
        </aside>

        <article>
          <ProductsCardsList isFavouriteClick={isFavouriteClick} />
        </article>
      </main>
    </>
  );
}

export default ProductsPage;
