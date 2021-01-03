import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import dishWashers from './dishwashers.json';
import '../styles/container/home.scss';

const Home = () => {
  return (
    <div className="home">
      <Hero
        title="Lavatrastos Prymium"
        subtitle="Más de 25,000 unidades vendidas"
        linktext="QUIERO VER MÁS!>>"
        url="/store-lavatrastos-grifos-bidet-guatemala"
      />
      <div className="galleries-container">
        <Gallery title="Galería" id="dish-washers" imageArray={dishWashers} />
      </div>
    </div>
  );
};

export default Home;
