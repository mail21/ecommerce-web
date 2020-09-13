import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from './../assets/banner.jpg';
import { ReactComponent as Hearth } from './../assets/hearth.svg';
import ProductsCard from './../components/ProductsCard/ProductsCard';

import './ProductsPage.scss';

function ProductsPage() {
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
            <Hearth style={{ marginRight: '10' }} />
            <span>My Favourites(0)</span>
          </div>
        </aside>

        <article>
          <ProductsCard />
          <ProductsCard />

          <ProductsCard />
          <ProductsCard />

          <ProductsCard />
          <ProductsCard />

          <ProductsCard />
          <ProductsCard />
        </article>
      </main>
    </>
  );
}

export default ProductsPage;
