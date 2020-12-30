import React, { useContext } from 'react';
import CardProduct from './CardProduct';
import '../styles/components/listOfProduct.scss';
import ContextApp from '../context/AppContext';

const ListOfProduct = () => {
  const {products} = useContext(ContextApp);
  const getList = () => {
    return (
      products.map((single) => 
        {return <CardProduct key={single.id} product={single} />}
      )
    )
  }

  return (
    <div className="list-item-container">
      {getList()}
    </div>
  )

}

export default ListOfProduct
