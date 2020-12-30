import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import ContextApp from '../context/AppContext';
import SingleProduct from '../components/SingleProduct'

const Detalle = () => {
  const { singleFilter, singleProduct, products } = useContext(ContextApp);
  const { modelo } = useParams();

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