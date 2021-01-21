import React from 'react';
import ListOfProduct from '../components/ListOfProduct';

const Tienda = ({products}) => {
  return (
    <div>
      <ListOfProduct products={products} />
    </div>
  );
};

export default Tienda;
