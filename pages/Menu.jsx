import React from 'react';
import Head from '@hooks/useSEO';
import All from '@containers/AllProduct';
import { getProducts, sobreAzulejo, url } from '@routes/Config';

export const getStaticProps = async () => {
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
      title="Todos los Productos | Lavatrastos | Grifos | Bidets"
      description="Encuntra accesorios, lavatrastos de lujo, fregaderos o bidets de grandes fosas y de acero inoxidable 202 y 304 para tu nueva cocina, todo los productos calibre 1.2mm el más grueso del mercado"
      img={sobreAzulejo()}
      url={url}
    >
      <All products={products} />
    </Head>
  );
};

export default Principal;