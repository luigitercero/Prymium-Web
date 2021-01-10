import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import ContextApp from '../context/AppContext';
import SingleProduct from '../components/SingleProduct'

const Detalle = () => {
  const router = useRouter()
  const { singleFilter, singleProduct, products } = useContext(ContextApp);
  const { modelo } = router.query
 

  useEffect(() => {
    singleFilter(modelo);
  }, [products]);

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
