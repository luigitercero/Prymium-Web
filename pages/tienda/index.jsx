import React from 'react';
import Head from '@hooks/useSEO';
import All from '../../src/containers/AllProduct';
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


  return (
    <Head
      title="Lavatrastos|Prymium"
      description="Encuntra accesorios lavatrastos, fregaderos o bidets de grandes fosas y deacero inoxidable para tu nueva cocina"
      img="https://lavatrastosprymium.com/wp-content/uploads/2020/09/7807-sobre-azulejo.jpeg"
      url="https://lavatrastosprymium.com/"
    >
      <All products={products} />
    </Head>
  );

};

export default Principal;
