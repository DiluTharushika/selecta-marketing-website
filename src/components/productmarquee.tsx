// src/components/ProductsSection.tsx
import React from 'react';
import '../styles/productmarquee.css';

import Product1 from '../assets/product1.png';
import Product2 from '../assets/product2.png';
import Product3 from '../assets/product3.png';
import Product4 from '../assets/product4.png';

type Product = {
  id: string;
  name: string;
  image: string;
};

const products: Product[] = [
  { id: 'p1', name: 'Selecta Paint Brush', image: Product1 },
  { id: 'p2', name: 'Selecta Paint Brush', image: Product2 },
  { id: 'p3', name: 'Selecta Paint Brush', image: Product3 },
  { id: 'p4', name: 'Selecta Paint Brush', image: Product4 },
  { id: 'p5', name: 'Selecta Paint Brush', image: Product1 },
  { id: 'p6', name: 'Selecta Paint Brush', image: Product2 },
  { id: 'p7', name: 'Selecta Paint Brush', image: Product3 },
  { id: 'p8', name: 'Selecta Paint Brush', image: Product4 },
  { id: 'p9', name: 'Selecta Paint Brush', image: Product1 },
];

const ProductsSection: React.FC = () => {
  return (
    <section className="products">
      <div className="products__inner">
        {/* LEFT SIDE */}
        <div className="products__left">
          <p className="products__eyebrow">Our Products</p>

          <h2 className="products__heading">
            <span className="products__heading-main">SELECTA</span>
            <span className="products__heading-sub">Our Products</span>
          </h2>

          <p className="products__description">
            Click to download complete catalog
          </p>

          <button className="products__button" type="button">
            Download
          </button>
        </div>

        {/* RIGHT SIDE – 3×3 grid */}
        <div className="products__right">
          <div className="products__grid-wrapper">
            <div className="products__grid">
              {products.map((product) => (
                <article key={product.id} className="products__card">
                  <div className="products__image-wrapper">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <p className="products__name">{product.name}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;