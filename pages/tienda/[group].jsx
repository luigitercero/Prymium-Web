/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Head from '@hooks/useSEO';
import { useRouter } from 'next/router';
import Tienda from '../../src/containers/Tienda';
import { getCatergories, singleCategoryUrl } from '../../src/routes/Config';

export const getStaticPaths = async () => {
  const response = await fetch(getCatergories.url);
  const products = await response.json();  

  const paths = products.map(({ alias }) => ({
    params: { group: `${alias}` },
  }))

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const response = await fetch(singleCategoryUrl(params.group))
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
      <Tienda products={products} title={group} isFiltered />
    </Head>
  );

};

export default Principal

