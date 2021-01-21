
import React from 'react';
import ListOfProduct from '../components/ListOfProduct';
import SingleProduct from '../components/SingleProduct'

const Detalle = ({ singleProduct, listRelevant }) => {


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

      <ListOfProduct filter='relevante' products={listRelevant||[]} h1={false}  />
    </div>
  );
};

export default Detalle;
