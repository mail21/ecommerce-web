import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from './../assets/banner.jpg';
import { ReactComponent as Hearth } from './../assets/hearth.svg';
import ProductsCardsList from './../components/ProductsCardsList/ProductsCardsList';
import { Context } from './../context';
import iklan from './../assets/iklanProductsPage.PNG';
import Footer from './../components/Footer/Footer';

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
          <div
            className="products--myfavourites"
            style={
              isFavouriteClick
                ? {
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                    opacity: '0.8',
                  }
                : {}
            }
            onClick={() => setIsFavouriteClick((prev) => !prev)}
          >
            <Hearth style={{ marginRight: '10', fill: 'red' }} />
            <span>My Favourites({state.jmlMyFavourites})</span>
          </div>
          <img src={iklan} alt="asda" style={{ marginTop: '50px' }} />
        </aside>

        <article>
          <ProductsCardsList isFavouriteClick={isFavouriteClick} />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default ProductsPage;
