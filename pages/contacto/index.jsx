import React from 'react';
import Head from '@hooks/useSEO';
import Detalle from '../../src/containers/Contact';

const Principal = () => {


  return (
    <Head
      title="Lavatrastos| Bidet | Grifos | Prymium"
      description="Ve a la tienda del los lavatrastos más lujoso de Guatemala , encuntra la dirección numero de teléfono ubicados en ciudad San Cristobal zona 8 de Mixco"
      img="/hero-querysize-480.webp"
    >
      <Detalle />
    </Head>
  );

};

export default Principal;
