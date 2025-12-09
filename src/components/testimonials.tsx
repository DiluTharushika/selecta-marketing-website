import React, { useEffect, useState } from 'react';
import '../styles/testimonials.css';
import Avatar from '../assets/product1.png'; // put a placeholder or real client photo here

type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  location?: string;
  product: string;
  rating: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Kavindu S.',
    role: 'Owner',
    company: 'Sampath Hardware',
    location: 'Galle',
    product: 'Selecta Mason Trowel',
    rating: 4.5,
    quote:
      'Good quality tools for construction work. Service is also excellent!',
  },
  {
    id: 't2',
    name: 'Nuwan P.',
    role: 'Contractor',
    company: 'NP Constructions',
    location: 'Colombo',
    product: 'Selecta Paint Brush',
    rating: 4.8,
    quote:
      'Reliable supply and consistent quality. SELECTA is easy to recommend to my team.',
  },
  {
    id: 't3',
    name: 'Shanika R.',
    role: 'Purchasing Manager',
    company: 'BuildSmart Traders',
    location: 'Kandy',
    product: 'Selecta Hand Tools',
    rating: 4.7,
    quote:
      'Professional service and on‑time deliveries. Very convenient for bulk orders.',
  },
];

const SLIDE_INTERVAL = 2000; // 6 seconds

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  const active = testimonials[activeIndex];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <p className="testimonials__eyebrow">Testimonials</p>
        <h2 className="testimonials__title">What Our Clients Say</h2>

        <div className="testimonials__card">
          {/* Top row: avatar + rating */}
          <div className="testimonials__card-top">
            <div className="testimonials__profile">
              <div className="testimonials__avatar">
                <img src={Avatar} alt={active.name} />
              </div>
              <div>
                <p className="testimonials__name">{active.name}</p>
                <p className="testimonials__role">
                  {active.role} — {active.company}
                  {active.location ? `, ${active.location}` : ''}
                </p>
              </div>
            </div>

            <div className="testimonials__rating">
              <span className="testimonials__rating-star">★</span>
              <span className="testimonials__rating-value">
                {active.rating.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="testimonials__quote-wrapper">
            <span className="testimonials__quote-mark testimonials__quote-mark--left">
              “
            </span>
            <p className="testimonials__quote">{active.quote}</p>
            <span className="testimonials__quote-mark testimonials__quote-mark--right">
              ”
            </span>
          </div>

          {/* Product line */}
          <p className="testimonials__product">
            <span className="testimonials__product-label">Product:&nbsp;</span>
            {active.product}
          </p>

          {/* Dots */}
          <div className="testimonials__dots">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={
                  'testimonials__dot' +
                  (index === activeIndex
                    ? ' testimonials__dot--active'
                    : '')
                }
                onClick={() => handleDotClick(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;