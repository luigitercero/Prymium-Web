import React from 'react';
import Head from '@hooks/useSEO';
import All from '../../src/containers/AllProduct';


const Principal = () => {


  return (
    <Head
      title="Lavatrastos|Prymium"
      description="Encuntra accesorios lavatrastos, fregaderos o bidets de grandes fosas y deacero inoxidable para tu nueva cocina"
      img="https://lavatrastosprymium.com/wp-content/uploads/2020/09/7807-sobre-azulejo.jpeg"
      url="https://lavatrastosprymium.com/"
    >
      <All />
    </Head>
  );

};

export default Principal;
