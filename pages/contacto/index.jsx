import React from 'react';
import Detalle from '../../src/containers/Contact';
import Head from '@hooks/useSEO';

const Principal = () => {


  return (
    <Head
      title="Lavatrastos || Prymium"
      description="Encuntra accesorios lavatrastos, fregaderos o bidets de grandes fosas y deacero inoxidable para tu nueva cocina"
    >
      <Detalle />
    </Head>
  );

};

export default Principal;
