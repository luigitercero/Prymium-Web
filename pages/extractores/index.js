import React from 'react';
import Head from '@hooks/useSEO';
import Home from '@containers/sanitarios';
import { getSlidersSinks, getSlidersBidet, sobreAzulejo } from '@routes/Config';

export const getStaticProps = async () => {
  // eslint-disable-next-line no-undef
  const response = await fetch(getSlidersSinks.url)
  const sliderSink = await response.json()
  // eslint-disable-next-line no-undef
  const bidet = await fetch(getSlidersBidet.url)
  const sliderBidet = await bidet.json()
  return {
    props: {
      sliderSink,
      sliderBidet
    }
  }
}

const Principal = ({sliderSink,sliderBidet}) => {
  return (
    <>
      <Head
        title="Venta de extracoteres de olores en Guatemala"
        description="Conoce el mas pontente motor para la extracción de olores en Guatemala"
        img={sobreAzulejo()}
      />
      <Home sliderBidet={sliderBidet} />
    </>
  )
};

export default Principal;