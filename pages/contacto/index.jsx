import React from 'react';
import Head from '@hooks/useSEO';
import Detalle from '../../src/containers/Contact';

const Principal = () => {


  return (
    <Head
      title="Lavatrastos|Prymium"
      description="Encuntra accesorios lavatrastos, fregaderos o bidets de grandes fosas y deacero inoxidable para tu nueva cocina"
      img="/hero-querysize-480.webp"
    >
      <Detalle />
    </Head>
  );

};

export default Principal;
