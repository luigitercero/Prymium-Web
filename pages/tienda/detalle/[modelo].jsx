/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Head from '@hooks/useSEO';
import DatoEriquesido from '@hooks/useEriquesido';
import Detalle from '@containers/Detalle';
import { singleProductUrl, getRecomended, url, getProducts } from '@routes/Config';

export const getStaticPaths = async () => {
  const response = await fetch(getProducts.url);
  const products = await response.json();  
  const paths = products.map((product) => ({
    params: { modelo: `${product.link}` },
  }))

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  try {
    const response = await fetch(singleProductUrl(params.modelo));
    const singleProduct = await response.json();
   
    return {
      props: {
        singleProduct
      }
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

const Principal = ({ singleProduct }) => {
  const title = singleProduct[0]?.title || "Producto de fregadero "
  const content = singleProduct[0]?.content || "Producto de fregadero "
  const imagen = singleProduct[0]?.imagen || "Producto de fregadero "
  const [relevante, setRelevante] = useState([]);

  useEffect(() => {
    window.fetch(getRecomended("relevante"))
      .then(response => response.json())
      .then(info => { setRelevante(info) })
  }, []);

  return (
    <Head
      title={`Prymium | ${title}`}
      description={`${content}, Lavatrastos Prymium tiene todo lo que necesistas para tu fregadero`}
      img={imagen}
      url={url}
      DatoEriquesido={DatoEriquesido ({singleProduct, url})}
    >
      <Detalle singleProduct={singleProduct} listRelevant={relevante} />
    </Head>
  )
};

export default Principal;