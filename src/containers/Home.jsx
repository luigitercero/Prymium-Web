
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import BidetFrame from '../components/BidetFrame';
import bidets from './bidetitems.json';


const YoutubeVideo = dynamic(() => import('../components/YoutubeVideo'));

const Home = () => {
  const GALLERY_URL = 'https://lavatrastosprymium.com/wp-json/pg/v1/sliders/'
  // const imagesObject = {
  //   queryType: 'max',
  //   images:[
  //     {querySize: 'default', image:'/images/hero.webp'},
  //     {querySize: '991', image:'/images/hero-querysize-652.webp'},
  //     {querySize: '575', image:'/images/hero-querysize-480.webp'}
  //   ]
  // }
  return (
    <div className="home">

      <Hero
        title="Lavatrastos Prymium"
        subtitle="Más de 25,000 unidades vendidas"
        linktext="QUIERO VER MÁS!>>"
        url="/store-lavatrastos-grifos-bidet-guatemala/"
        image="/images/backgrounds/hero-image.webp"
      />
      <section className="products-container">
        <Gallery title="Galería" url={GALLERY_URL} />
        <span className="home-link">
          <Link href="/tienda/lavatrastos">Lavatrastos</Link>
        </span>
        <YoutubeVideo title='Accesorios' vid='zEAHyUCb_Rc' />
        <span className="home-link">
          <Link href="/tienda/accesorios">Accesorios</Link>
        </span>
      </section>
      <section className="bidetframe-container">
        <BidetFrame itemsArray={bidets} />
        <span className="home-link">
          <Link href="/tienda/bidet">Bidet</Link>
        </span>
      </section>
    </div>
  );
};

export default Home;
