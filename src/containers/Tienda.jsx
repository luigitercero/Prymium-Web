import React from 'react';
import ListOfProduct from '@components/ListOfProduct';

const Tienda = ({products,title}) => {

  return (
    <div>
      <ListOfProduct products={products} title={title} />
    </div>
  );
};

export default Tienda;
