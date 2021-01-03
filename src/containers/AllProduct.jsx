import React from 'react';
import ListOfProduct from '../components/ListOfProduct';

const AllProduct = () => {
  return (
    <div>
      <ListOfProduct filter="lavatrastos" />
      <ListOfProduct filter="grifos" />
      <ListOfProduct filter="bidet" />
      <ListOfProduct filter="accesorios" />
    </div>
  );
};

export default AllProduct;
