import React from 'react';
import ListOfProduct from '@components/ListOfProduct';

const AllProduct = ({ products }) => {
  return (
    <div>
      <ListOfProduct products={products} filter="lavatrastos" h1={false} />
      <ListOfProduct products={products} filter="mezcladora" h1={false} />
      <ListOfProduct products={products} filter="bath" title="Grifos de baño" h1={false} />
      <ListOfProduct products={products} filter="duchas" h1={false} />
      <ListOfProduct products={products} filter="extractores" h1={false} />
      <ListOfProduct products={products} filter="accesorios" h1={false} />
    </div>
  );
};

export default AllProduct;