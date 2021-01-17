import React from 'react';
import Head from '@hooks/useSEO';
import Home from '../src/containers/Home';

const Principal = () => {
  return (
    <>
      <Head
        title="Lavatrastos || Prymium"
        description="Lavatrastos o fregaderos de acero inoxidable con fosas profundas, para lavar una olla"
      />
      <Home />
    </>
  )

};

export default Principal;
