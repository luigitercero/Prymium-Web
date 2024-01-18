export const getGroup = (query,products) => {
if (products.filter) {
  // eslint-disable-next-line array-callback-return
  // eslint-disable-next-line consistent-return
  // eslint-disable-next-line array-callback-return
  return products.filter((producto) => {
      const fitler = producto.category.filter(cat => {
        return cat.name.toLowerCase().includes(query.toLowerCase());
      });

      if (fitler.length > 0) {
        return true;
      }
        return false;
    });
  }
}

export const singleFilter = (query,products) => {
  const single = products.filter(producto =>
    producto.link.toLowerCase().includes(query.toLowerCase())
  )
  return single
}

export default getGroup;