import React, { useContext } from 'react';
import ContextApp from '../context/AppContext';
import SingleProduct from '../components/SingleProduct'

const Detalle = () => {
  const {  singleProduct } = useContext(ContextApp);

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
