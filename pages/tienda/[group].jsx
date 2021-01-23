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
      title={`Prymium | ${group}`}
      description="Encuentra lavatrastos de lujo, grifos y bidet, en acero inoxidable y plástico, grifos de 23 cm y lavatrastos de 55 cm a 120 cm con y sin ala de acero inxidable 202 y 304"
      img="https://lavatrastosprymium.com/wp-content/uploads/2020/09/7807-sobre-azulejo.jpeg"
      url="https://lavatrastosprymium.com/"
    >
      <Tienda products={products} title={group} />
    </Head>
  );

};

export default Principal

