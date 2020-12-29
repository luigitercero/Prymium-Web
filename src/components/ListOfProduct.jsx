import React, { useEffect, useState } from 'react';
import CardProduct from './CardProduct';
import { getProducts } from '../routes/Config';
import '../styles/components/listOfProduct.scss';

const ListOfProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(getProducts.url)
      // eslint-disable-next-line arrow-body-style
      .then(response => response.json())
      // eslint-disable-next-line arrow-body-style
      .then(data => setProducts(data))
  }, []);

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
