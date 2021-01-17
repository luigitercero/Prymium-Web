import React, { useContext, useEffect } from 'react';
import Head from '@hooks/useSEO';
import ContextApp from '@context/AppContext';
import { useRouter } from 'next/router';
import Detalle from '../../src/containers/Detalle';

const Principal = () => {
  const { singleFilter, products, singleProduct } = useContext(ContextApp)
  const router = useRouter();
  const { modelo } = router.query
  const title = singleProduct[0]?.title || "Producto de fregadero "
  const content = singleProduct[0]?.content || "Producto de fregadero "
  const imagen =singleProduct[0]?.imagen || "Producto de fregadero "
  useEffect(() => {
    singleFilter(modelo);

  }, [products]);

  return (

    <Head
      title={`Prymium|${title}`}
      description={`${content}, Lavatrastos Prymium tiene todo lo que necesistas para tu fregadero`}
      img={imagen}
      url="https://lavatrastosprymium.com/"
    >
      <Detalle />
    </Head>
  )

};

export default Principal;
