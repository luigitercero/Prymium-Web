import React from 'react';
import Head from '@hooks/useSEO';
import Detalle from '@containers/Contact';
import { sobreAzulejo } from '@routes/Config';

const Principal = () => {
  return (
    <Head
      title="Contacto | Lavatrastos Prymium Guatemala"
      description="Contacta a Lavatrastos Prymium en Guatemala: direccion, telefono y asesoria para lavatrastos, grifos, bidets, duchas y extractores."
      img={sobreAzulejo()}
    >
      <Detalle />
    </Head>
  );
};

export default Principal;