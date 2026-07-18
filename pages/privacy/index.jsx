import React from 'react';
import Head from '@hooks/useSEO';
import Privacy from '@containers/Privacy';

const Principal = () => {
  return (
    <Head
      title="Política de Privacidad | Lavatrastos Prymium Guatemala"
      description="Política de privacidad de Lavatrastos Prymium. Información sobre el tratamiento de datos personales y el uso de inteligencia artificial para análisis de conversaciones."
      img="/images/backgrounds/hero-image.webp"
    >
      <Privacy />
    </Head>
  );
};

export default Principal;
