import React from 'react';
import ListOfProduct from '../components/ListOfProduct';

const AllProduct = ({products}) => {
  return (
    <div>
      <ListOfProduct products={products} filter="lavatrastos" />
      <ListOfProduct products={products} filter="grifos" />
      <ListOfProduct products={products} filter="bidet" />
      <ListOfProduct products={products} filter="accesorios" />
    </div>
  );
};

export default AllProduct;
