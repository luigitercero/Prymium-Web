import React from 'react';
import SingleProduct from '../components/SingleProduct'

const Detalle = ({singleProduct}) => {
 

  const ProductComponent = () => {
    return (
      singleProduct.map((single) => {
        return (
          <SingleProduct key={single.id} product={single} />
        )
      })

    )
  }

  return (
    <div>
      {ProductComponent()}
    </div>
  );
};

export default Detalle;
