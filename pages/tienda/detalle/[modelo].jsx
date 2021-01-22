import React, { useEffect, useState } from 'react';
import Head from '@hooks/useSEO';

import Detalle from '../../../src/containers/Detalle';
import { singleProductUrl, getRecomended } from '../../../src/routes/Config';

export const getServerSideProps = async ({ params }) => {
  // eslint-disable-next-line no-undef
  const response = await fetch(singleProductUrl(params.modelo))
  const singleProduct = await response.json()
  return {
    props: {
      singleProduct
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
      url="https://lavatrastosprymium.com/"
    >
      <Detalle singleProduct={singleProduct} listRelevant={relevante} />
    </Head>
  )

};

export default Principal;
