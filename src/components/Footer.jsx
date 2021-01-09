/* eslint-disable arrow-body-style */
import React from 'react';
import '../styles/components/footer.scss';

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
          <i className="icon facebook icon--check" />
        </a>
        <a href="https://www.instagram.com/lavatrastosprymium/" className="icon-container">
          <i className="icon instagram icon--check" />
        </a>
        <a href="https://www.youtube.com/channel/UCoseb5M5memG5PF67kF4slQ/featured" className="icon-container">
          <i className="icon youtube icon--check" />
        </a>
        
      </section>
    </footer>
  );
};

export default Footer;
