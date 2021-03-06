import React from 'react';
import ListOfProduct from '../components/ListOfProduct';

const AllProduct = ({ products }) => {
  return (
    <div>
      <ListOfProduct products={products} filter="lavatrastos" h1={false} />
      <ListOfProduct products={products} filter="grifos" h1={false} />
      <ListOfProduct products={products} filter="bidet" h1={false} />
      <ListOfProduct products={products} filter="accesorios" h1={false} />
    </div>
  );
};

export default AllProduct;
