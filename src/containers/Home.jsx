import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import YoutubeVideo from '../components/YoutubeVideo';
import BidetFrame from '../components/BidetFrame';
import dishWashers from './dishwashers.json';
import '../styles/container/home.scss';

const Home = () => {
  return (
    <div className="home">
      <Hero
        title="Lavatrastos Prymium"
        subtitle="Más de 25,000 unidades vendidas"
        linktext="QUIERO VER MÁS!>>"
      />
      <section className="products-container">
        <Gallery title="Galería" id="dish-washers" imageArray={dishWashers} />
        <YoutubeVideo title='Accesorios' vid='zEAHyUCb_Rc' />
      </section>
      <section className="bidetframe-container">
        <BidetFrame />
      </section>
    </div>
  );
};

export default Home;
