 
import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import BidetFrame from '../components/BidetFrame';
import bidets from './bidetitems.json';
import YoutubeVideo from '../components/YoutubeVideo'
import HomeLink from '../../src/components/HomeLink'

const Home = ({sliderSink,sliderBidet}) => {

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
        url="/tienda/"
        image="/images/backgrounds/hero-image.webp"
      />
      <section className="products-container">
        <Gallery title="Galería" sliderSink={sliderSink} />
        <HomeLink url="/tienda/lavatrastos" title="Lavatrastos" />
        <span className="home-link">
          <Link href="/tienda/lavatrastos">Lavatrastos</Link>
        </span>
        <YoutubeVideo title='Accesorios' vid='zEAHyUCb_Rc' />
        <HomeLink url="/tienda/accesorios" title="Accesorios" />
        <span className="home-link">
          <Link href="/tienda/accesorios">Accesorios</Link>
        </span>
      </section>
      <section className="bidetframe-container">
        <BidetFrame itemsArray={bidets} sliderBidet={sliderBidet} />
        <HomeLink url="/tienda/bidet" title="Bidet" />
       
      </section>
    </div>
  );
};

export default Home;
