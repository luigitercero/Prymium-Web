
import React from 'react';
import ListOfProduct from '../components/ListOfProduct';
import SingleProduct from '../components/SingleProduct/SingleProduct'
import ArrayNavigationButton from '../components/ArrayNavigationButton';

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
      <ArrayNavigationButton />
      <ListOfProduct filter='relevante' products={listRelevant||[]} h1={false} title="Lo más vendido" />
    </div>
  );
};

export default Detalle;
