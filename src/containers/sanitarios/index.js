import React from 'react';
import Hero from '../../components/Hero';
import BidetFrame from '../../components/BidetFrame';
import YoutubeVideo from '../../components/YoutubeVideo';
import HomeLink from "../../components/HomeLink";

const HomePage = ({sliderBidet}) => {

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
        <HomeLink url="/tienda/detalle/sanitario-con-bidet" title="Lavatrastos" />
        <YoutubeVideo title='Sanitarios' vid='WB7dplMV6CI' />
        <HomeLink url="/tienda/detalle/sanitario-con-bidet" title="Accesorios" />
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
