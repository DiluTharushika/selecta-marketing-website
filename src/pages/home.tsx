// src/pages/home.tsx
import React, { useEffect, useState } from 'react';
import '../styles/home.css';

type Category = {
  id: string;
  name: string;
  icon?: string;
};

type Slide = {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  phone: string;
};

type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type Stat = {
  id: string;
  value: string;
  label: string;
};

const CATEGORIES: Category[] = [
  { id: 'paint-brush', name: 'Selecta Paint Brush', icon: '🛠' },
  { id: 'hand-tools-1', name: 'Selecta Hand Tools', icon: '🛠' },
  { id: 'hand-tools-2', name: 'Selecta Hand Tools', icon: '🛠' },
  { id: 'hand-saw', name: 'Selecta Hand Saw', icon: '🛠' },
];

const SLIDES: Slide[] = [
  {
    id: 'slide-1',
    subtitle: 'Sri Lanka’s No.1 Trusted',
    title: 'Hardware Supplier',
    description:
      'Delivering strength, reliability, and innovation for every project—built with the confidence of thousands of customers.',
    phone: '+94 91 2238 380',
  },
  {
    id: 'slide-2',
    subtitle: 'Reliable Stock & Delivery',
    title: 'On-Time, Every Time',
    description:
      'We ensure consistent stock availability and punctual delivery so your projects never slow down.',
    phone: '+94 77 123 4567',
  },
  {
    id: 'slide-3',
    subtitle: 'Built for Professionals',
    title: 'Tools You Can Trust',
    description:
      'From workshops to industrial sites, our tools are tested and trusted by professionals across Sri Lanka.',
    phone: '+94 71 987 6543',
  },
];

const SERVICES: Service[] = [
  {
    id: 'fast-delivery',
    title: 'Fast Delivery Service',
    description:
      'Reliable delivery ensures products reach your location safely and on time, supporting efficient construction progress.',
    icon: '🚚',
  },
  {
    id: 'after-sales',
    title: 'After-Sales Support',
    description:
      'We offer responsive customer assistance, addressing issues promptly to ensure complete satisfaction after purchase.',
    icon: '📞',
  },
  {
    id: 'bulk-supply',
    title: 'Bulk Supply',
    description:
      'We provide large-volume hardware supplies for construction and industrial projects, ensuring continuous workflow.',
    icon: '📦',
  },
];

const STATS: Stat[] = [
  { id: 'customers', value: '150+', label: 'Customers' },
  { id: 'products', value: '50+', label: 'Products' },
  { id: 'deliveries', value: '70+', label: 'Deliveries' },
];

const SLIDE_INTERVAL_MS = 6000;

const Home: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Auto‑advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = SLIDES[activeSlideIndex];

  return (
    <div id="home" className="home">
      {/* HERO – FULL-WIDTH AUTO SLIDER */}
      <section className="hero hero--full">
        <div className="hero__left hero__left--full">
          <p className="hero__subtitle">{currentSlide.subtitle}</p>
          <h1 className="hero__title">{currentSlide.title}</h1>
          <p className="hero__description">{currentSlide.description}</p>

          <div className="hero__contact-card">
            <p className="hero__contact-label">Call us</p>
            <p className="hero__contact-number">{currentSlide.phone}</p>
          </div>

          <div className="hero__dots" aria-label="Hero slides">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={
                  'hero__dot' +
                  (index === activeSlideIndex ? ' hero__dot--active' : '')
                }
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="products" className="categories">
        <h2 className="section-title">Our Categories</h2>
        <div className="categories__grid">
          {CATEGORIES.map((category) => (
            <article key={category.id} className="category-card">
              <div className="category-card__icon">
                {category.icon ?? '🛠'}
              </div>
              <p className="category-card__name">{category.name}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WELCOME / ABOUT */}
      <section id="about" className="welcome">
        <h2 className="section-title">Welcome To SELECTA</h2>
        <p className="welcome__text">
          Your trusted hardware partner in Sri Lanka, delivering durable and
          high‑quality tools and construction materials. With strong industry
          experience and reliable service, we support every project with expert
          guidance, competitive pricing, and premium products.
        </p>

        <button className="welcome__button" type="button">
          Read More
        </button>
      </section>

      {/* OUR SERVICES – GLASS CARDS + STATS BAR */}
      <section id="services" className="services services--with-bg">
        <div className="services__overlay">
          <div className="services__inner">
            <p className="services__eyebrow">Our Services</p>
            <h2 className="section-title services__title">
              What Service We Offer
            </h2>

            <div className="services__grid">
              {SERVICES.map((service) => (
                <article key={service.id} className="service-card">
                  <div className="service-card__icon">
                    <span>{service.icon}</span>
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>

            {/* Stats bar */}
            <div className="services-stats">
              {STATS.map((item) => (
                <div key={item.id} className="services-stats__item">
                  <div className="services-stats__value">{item.value}</div>
                  <div className="services-stats__label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;