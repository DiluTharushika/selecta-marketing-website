import React from 'react';
import '../styles/footer.css';
import Logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Left column: logo + description */}
        <div className="footer__col footer__col--brand">
          <div className="footer__logo">
            <img src={Logo} alt="Selecta logo" />
          </div>
          <h3 className="footer__company-name">Selecta Marketing (PVT) LTD</h3>
          <p className="footer__text">
            Selecta Mkt Pvt Ltd is a leading hardware supplier based in Sri
            Lanka, offering a wide range of high‑quality tools, fittings,
            construction materials, and industrial hardware products.
          </p>
        </div>

        {/* Middle column: navigation */}
        <div className="footer__col footer__col--links">
          <h4 className="footer__heading">Home</h4>
          <a href="#about" className="footer__link">
            About Us
          </a>
          <a href="#products" className="footer__link">
            Categories
          </a>
          <a href="#products" className="footer__link">
            Products
          </a>
        </div>

        {/* Right column: address + socials */}
        <div className="footer__col footer__col--contact">
          <h4 className="footer__heading">Selecta Marketing (PVT) LTD</h4>
          <p className="footer__text footer__text--compact">
            19 Anagarika Dharmapala<br />
            Mawatha, Galle 80000
          </p>
          <p className="footer__text footer__text--compact">
            0112345678 &nbsp; | &nbsp; 04478978977
          </p>

          <div className="footer__socials">
            <a
              href="#"
              aria-label="Facebook"
              className="footer__social footer__social--fb"
            >
              f
            </a>
            <a
              href="mailto:info@selectamarketing.com"
              aria-label="Email"
              className="footer__social footer__social--mail"
            >
              ✉
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="footer__social footer__social--yt"
            >
              ▶
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__bottom-text">
          © {new Date().getFullYear()} Selecta Marketing (PVT) LTD. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;