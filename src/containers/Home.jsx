import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import BidetFrame from '../components/BidetFrame';
import dishWashers from './dishwashers.json';
import bidets from './bidetitems.json';

// eslint-disable-next-line arrow-body-style
const YoutubeVideo = dynamic(() => import('../components/YoutubeVideo'));

const Home = () => {
  return (
    <div className="home">
      
      <Hero
        title="Lavatrastos Prymium"
        subtitle="Más de 25,000 unidades vendidas"
        linktext="QUIERO VER MÁS!>>"
        url="/store-lavatrastos-grifos-bidet-guatemala/"
      />
      <section className="products-container">
        <Gallery title="Galería" imageArray={dishWashers} />
        <YoutubeVideo title='Accesorios' vid='zEAHyUCb_Rc' /> 
      </section>
      <section className="bidetframe-container">
        <BidetFrame itemsArray={bidets} />
      </section>
    </div>
  );
};

export default Home;
