import React from 'react';
import Head from '@hooks/useSEO';

import Detalle from '../../src/containers/Detalle';
import {  singleProductUrl} from '../../src/routes/Config';

export const getServerSideProps = async ({params}) => {
  // eslint-disable-next-line no-undef
  const response = await fetch(singleProductUrl(params.modelo))
  const singleProduct = await response.json()
  return {
    props: {
      singleProduct
    }
  }
}

const Principal = ({singleProduct}) => {
  const title = singleProduct[0]?.title || "Producto de fregadero "
  const content = singleProduct[0]?.content || "Producto de fregadero "
  const imagen =singleProduct[0]?.imagen || "Producto de fregadero "

  return (

    <Head
      title={`Prymium|${title}`}
      description={`${content}, Lavatrastos Prymium tiene todo lo que necesistas para tu fregadero`}
      img={imagen}
      url="https://lavatrastosprymium.com/"
    >
      <Detalle singleProduct={singleProduct} />
    </Head>
  )

};

export default Principal;
