import React from 'react';
import Head from '@hooks/useSEO';
import Home from '../src/containers/Home';
import {  getSlidersSinks,getSlidersBidet} from '../src/routes/Config';

export const getStaticProps = async () => {
  // eslint-disable-next-line no-undef
  const response = await fetch(getSlidersSinks.url)
  const sliderSink = await response.json()
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
        title="Lavatrastos|Prymium"
        description="Lavatrastos o fregaderos de acero inoxidable con fosas profundas, para lavar una olla"
        img="https://lavatrastosprymium.com/wp-content/uploads/2020/09/7807-sobre-azulejo.jpeg"
      />
      <Home sliderSink={sliderSink} sliderBidet={sliderBidet} />
    </>
  )

};

export default Principal;
