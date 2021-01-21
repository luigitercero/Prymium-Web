/* eslint-disable import/no-unresolved */
import React from 'react';
import Head from '@hooks/useSEO';
import { useRouter } from 'next/router';
import Tienda from '../../src/containers/Tienda';
import { getProducts } from '../../src/routes/Config';

export const getServerSideProps = async () => {
  // eslint-disable-next-line no-undef
  const response = await fetch(getProducts.url)
  const products = await response.json()

  return {
    props: {
      products
    }
  }
}
const Principal = ({ products }) => {
  const router = useRouter()
  const { group } = router.query

  return (
    <Head
      title={`Prymium|${group}`}
      description="Elige entre muchas opciones un lavatrastos o fregadero que se pueda apapatar a tus necesidades"
      img="https://lavatrastosprymium.com/wp-content/uploads/2020/09/7807-sobre-azulejo.jpeg"
      url="https://lavatrastosprymium.com/"
    >
      <Tienda products={products} />
    </Head>
  );

};

export default Principal

