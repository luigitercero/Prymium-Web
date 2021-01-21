/* eslint-disable arrow-body-style */
import React from 'react';


const Footer = () => {
  return (
    <footer className="container-footer">
      <section>

        <p>Dirección:</p>
        <p>3a. calle 3-54 boulevard San Cristobal, zona 8 de Mixco, Guatemala, Guatemala</p>

      </section>
      <section>

        <p>Tel: 2485-5176</p>
        <p>Cel: 5510-3370</p>

      </section>
      <section>

        <p>Redes Sociales</p>
        <a href="https://www.facebook.com/lavatrastosprymium" className="icon-container">
          <span className="icon"><img src="/images/icons/facebook-brands.webp" loading="lazy" alt="f" /></span>
        </a>
        <a href="https://www.instagram.com/lavatrastosprymium/" className="icon-container">
          <span className="icon"><img src="/images/icons/instagram-brands.webp" loading="lazy" alt="i" /></span>
        </a>
        <a href="https://www.youtube.com/channel/UCoseb5M5memG5PF67kF4slQ/featured" className="icon-container">
          <span className="icon"><img src="/images/icons/youtube-brands.webp" loading="lazy" alt="y" /></span>
        </a>
        
      </section>
    </footer>
  );
};

export default Footer;
