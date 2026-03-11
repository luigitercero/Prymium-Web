const removeHtml = (text = '') => text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const DatoEriquesido = ({ singleProduct, url }) => {
  const product = singleProduct?.[0] || {};
  const numericPrice = String(product.price || '').replace(/,/g, '').trim();
  const validUntil = new Date();
  validUntil.setFullYear(validUntil.getFullYear() + 1);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title || 'Producto Prymium',
    image: [product.imagen || 'https://www.lavatrastosprymium.com/images/logo/logo-prymium-header.webp'],
    description: removeHtml(product.content || ''),
    sku: String(product.id || ''),
    mpn: String(product.id || ''),
    brand: {
      '@type': 'Brand',
      name: 'Prymium'
    },
    offers: {
      '@type': 'Offer',
      url: url || 'https://www.lavatrastosprymium.com/tienda',
      priceCurrency: 'GTQ',
      price: numericPrice || '0',
      priceValidUntil: validUntil.toISOString().split('T')[0],
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock'
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        propertyID: 'product-id',
        value: String(product.id || '')
      }
    ]
  };

  return JSON.stringify(schema);
};

export default DatoEriquesido