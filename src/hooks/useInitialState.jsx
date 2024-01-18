import { useState, useEffect } from 'react';
import { getProducts } from '@routes/Config';

const useInitialState = () => {

  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [groupFilterd, setGroup] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(getProducts.url)
      // eslint-disable-next-line arrow-body-style
      .then(response => response.json())
      // eslint-disable-next-line arrow-body-style
      .then(data => { return setProducts(data) })
  }, []);

  const singleFilter = (query) => {
    const single = products.filter(producto =>
      producto.link.toLowerCase().includes(query.toLowerCase())
    )
    setSingleProduct(single);
  }

  return {
    products,
    singleFilter,
    singleProduct,
    groupFilterd, setGroup
  }
}

export default useInitialState