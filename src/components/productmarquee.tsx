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

const baseProducts: Product[] = [
  { id: 'p1', name: 'Selecta Paint Brush', image: Product1 },
  { id: 'p2', name: 'Selecta Pair Spanner', image: Product2 },
  { id: 'p3', name: 'Selecta Trowel', image: Product3 },
  { id: 'p4', name: 'Selecta Hand Saw', image: Product4 },
  { id: 'p5', name: 'Selecta Lock', image: Product1 },
  { id: 'p6', name: 'Selecta Steel Trowel', image: Product2 },
];

const makeLoop = (items: Product[]) => [...items, ...items];

const ProductsSection: React.FC = () => {
  const row1 = makeLoop(baseProducts);
  const row2 = makeLoop([...baseProducts].reverse());
  const row3 = makeLoop(baseProducts);

  return (
    <section className="products">
      <div className="products__inner">
        {/* LEFT SIDE */}
        <div className="products__left">
          <p className="products__eyebrow">OUR PRODUCTS</p>

          <h2 className="products__heading">
            <span className="products__heading-main">SELECTA</span>
            <span className="products__heading-sub">Professional Hardware Range</span>
          </h2>

          <p className="products__description">
            From finishing brushes to heavy–duty cutting tools, SELECTA delivers a
            focused range of hardware essentials engineered for contractors,
            resellers, and industrial projects. Every item is selected for
            durability, consistency, and value.
          </p>

          <ul className="products__highlights">
            <li>Trusted quality for Sri Lankan construction and industrial needs</li>
            <li>Reliable stock levels for bulk and repeat orders</li>
            <li>Branded packaging and after‑sales support for distributors</li>
          </ul>

          <button className="products__button" type="button">
            Download Full Product Catalog
          </button>
        </div>

        {/* RIGHT SIDE – 3 separate moving rows */}
        <div className="products__right">
          {/* Row 1 */}
          <div className="products-row products-row--slow">
            <div className="products-row__track">
              {row1.map((product, index) => (
                <article
                  key={`${product.id}-r1-${index}`}
                  className="products-card"
                >
                  <div className="products-card__image-wrapper">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <p className="products-card__name">{product.name}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="products-row products-row--medium">
            <div className="products-row__track">
              {row2.map((product, index) => (
                <article
                  key={`${product.id}-r2-${index}`}
                  className="products-card"
                >
                  <div className="products-card__image-wrapper">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <p className="products-card__name">{product.name}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Row 3 */}
          <div className="products-row products-row--fast">
            <div className="products-row__track">
              {row3.map((product, index) => (
                <article
                  key={`${product.id}-r3-${index}`}
                  className="products-card"
                >
                  <div className="products-card__image-wrapper">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <p className="products-card__name">{product.name}</p>
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