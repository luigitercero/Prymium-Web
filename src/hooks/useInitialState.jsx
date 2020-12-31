import { useState, useEffect } from 'react';
import { getProducts } from '../routes/Config';

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

    const single = products.filter(producto => {

      return producto.link.toLowerCase().includes(query.toLowerCase())
    })

    setSingleProduct(single);

  }

  const getGroup = (query) => {

    const single = products.filter(producto => {
       const fitler = producto.category.filter(cat => {
          return cat.name.toLowerCase().includes(query.toLowerCase());
        });
        
        if (fitler.length>0) {
          return true
        }
    });

    setGroup(single);

  }

  return {
    products,
    singleFilter,
    singleProduct,
    getGroup,
    groupFilterd
  }
}


export default useInitialState