

const DatoEriquesido = ({singleProduct,url}) => {
  
              return `
              {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "${singleProduct[0]?.title || ""} ",
                "image": [
                  "${singleProduct[0]?.imagen|| ""}"
                 ],
                "description": "${singleProduct[0]?.content || ""}",
                "sku": "${singleProduct[0]?.id || ""}",
                "mpn": "${singleProduct[0]?.id || ""}",
                "brand": {
                  "@type": "Brand",
                  "name": "Prymium"
                },
                "review": {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "0",
                    "bestRating": "0",
                    "worstRating": "0"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Luis"
                  }
                },
                "offers": {
                  "@type": "Offer",
                  "url": "${url || ""}",
                  "priceCurrency": "GTQ",
                  "condition": "new",
                  "price": "${singleProduct[0]?.price.replace(",","") || ""}",
                  "priceValidUntil": "2022-01-01",
                  "itemCondition": "https://schema.org/NewCondition",
                  "availability": "https://schema.org/InStock"
                },
                "additionalProperty": [{
                  "@type": "PropertyValue",
                  "propertyID": "1",
                  "value": "${singleProduct[0]?.id || ""}"
                }]
              }
            `
  //           ,
  //           }}
  // />
  
  
  
}

export default DatoEriquesido