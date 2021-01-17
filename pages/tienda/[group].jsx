/* eslint-disable import/no-unresolved */
import React from 'react';
import Head from '@hooks/useSEO';
import { useRouter } from 'next/router';
import Tienda from '../../src/containers/Tienda';


const Principal = () => {
  const router = useRouter()
  const {group} = router.query
  return (
    <Head
      title={`Prymium|${group}`}
      description="Elige entre muchas opciones un lavatrastos o fregadero que se pueda apapatar a tus necesidades"
      img="https://lavatrastosprymium.com/wp-content/uploads/2020/09/7807-sobre-azulejo.jpeg"
      url="https://lavatrastosprymium.com/"
    >
      <Tienda />
    </Head>
  );

};

export default Principal;
