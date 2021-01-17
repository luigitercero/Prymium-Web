/* eslint-disable import/no-unresolved */
import React from 'react';
import Head from '@hooks/useSEO';
import Tienda from '../../src/containers/Tienda';


const Principal = () => {


  return (
    <Head
      title="Lavatrastos || Prymium"
      description="Elige entre muchas opciones un lavatrastos o fregadero que se pueda apapatar a tus necesidades"
    >
      <Tienda />
    </Head>
  );

};

export default Principal;
