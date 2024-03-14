import React from 'react';
import Hero from '@components/Hero';
import Gallery from '@components/Gallery';
import BidetFrame from '@components/BidetFrame';
import YoutubeVideo from '@components/YoutubeVideo';
import HomeLink from "@components/HomeLink";

const HomePage = ({sliderSink,sliderBidet}) => {

  return (
    <div className="home">

      <Hero
        title="Lavatrastos Prymium"
        subtitle="Más de 500 mil unidades vendidas"
        linktext="QUIERO VER MÁS!>>"
        url="/tienda/"
        image="/images/backgrounds/hero-image.webp"
      />

      <section className="products-container">
        <Gallery title="Galería" sliderSink={sliderSink} />
        <HomeLink url="/tienda/lavatrastos" title="Lavatrastos" />
        <YoutubeVideo title='Accesorios' vid='zEAHyUCb_Rc' />
        <HomeLink url="/tienda/accesorios" title="Accesorios" />
      </section>
      
      <section className="bidetframe-container">
        <BidetFrame sliderBidet={sliderBidet} />
        <HomeLink url="/tienda/bidets" title="Bidet" />
      </section>
  
    </div>
  );
};

const Home = React.memo(HomePage);

export default Home;