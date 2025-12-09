import React from 'react';
import '../styles/contactH.css';

const ContactH: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        {/* SECTION LABEL */}
        <div className="contact__header">
          <p className="contact__eyebrow">Contact Us</p>
          <h2 className="contact__title">Let&apos;s talk !</h2>
        </div>

        <div className="contact__content">
          {/* LEFT: MAP + COMPANY INFO */}
          <div className="contact__left">
            <div className="contact__map-wrapper">
              {/* Google Maps iframe – you can replace src with your real map */}
              <iframe
                title="Selecta Marketing location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507872.1247052084!2d79.720093720586!3d6.927078526042943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1730b6f9858f3%3A0x5e5d5f57139c0b0b!2sGalle!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact__company">
              <h3 className="contact__company-name">
                Selecta Marketing (PVT) LTD
              </h3>
              <p className="contact__company-address">
                19 Anagarika Dharmapala Mawatha, Galle 80000
              </p>
              <p className="contact__company-phone">
                0112345678 &nbsp; | &nbsp; 04478978977
              </p>

              <div className="contact__socials">
                <a href="#" aria-label="Facebook" className="contact__social contact__social--fb">
                  f
                </a>
                <a href="mailto:info@selectamarketing.com" aria-label="Email" className="contact__social contact__social--mail">
                  ✉
                </a>
                <a href="#" aria-label="YouTube" className="contact__social contact__social--yt">
                  ▶
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="contact__right">
            <form
              className="contact__form"
              onSubmit={(e) => {
                e.preventDefault();
                // later: add real submit logic
              }}
            >
              <div className="contact__field">
                <label htmlFor="contact-name">Name:</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">Email:</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">Message:</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about your requirements"
                  required
                />
              </div>

              <button type="submit" className="contact__button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactH;