import React from 'react';
import Head from '@hooks/useSEO';
import Blog from '@containers/Blog';
import { sobreAzulejo } from '@routes/Config';

const Principal = () => {
  return (
    <Head
      title="Blog de Lavatrastos Prymium | Consejos para cocina y baño"
      description="Guías, consejos y novedades sobre lavatrastos, grifos, bidets, duchas y extractores para tu hogar en Guatemala."
      img={sobreAzulejo()}
      type="article"
    >
      <Blog />
    </Head>
  )
}

export default Principal;