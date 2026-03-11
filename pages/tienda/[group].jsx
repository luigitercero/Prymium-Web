/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Head from '@hooks/useSEO';
import { useRouter } from 'next/router';
import Tienda from '@containers/Tienda';
import { singleCategoryUrl, sobreAzulejo, getCatergories } from '@routes/Config';

export const getStaticPaths = async () => {
  const response = await fetch(getCatergories.url);
  const products = await response.json();  
  const paths = products.map(({ alias}) => ({
    params: { group: `${alias}`},
  }))

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  try {
    const response = await fetch(singleCategoryUrl(params.group))
    const products = await response.json()

    return {
      props: {
        products
      }
    }
  } catch (e){
    return {
      notFound: true,
    }
  }
}

const Principal = ({ products }) => {
  const router = useRouter()
  const { group } = router.query
  const title = (group === "bath")? "Griferia de baño" : group
  const cleanTitle = (title || 'productos').toString();
  
  return (
    <Head
      title={`Prymium | ${cleanTitle}`}
      description={`Encuentra ${cleanTitle} de lujo Prymium en Guatemala con materiales premium y diseno moderno para cocina y bano.`}
      img={sobreAzulejo()}
    >
      <Tienda products={products} title={title} isFiltered />
    </Head>
  );
};

export default Principal