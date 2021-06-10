

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
                    "bestRating": "0"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Luis"
                  }
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "0",
                  "reviewCount": "0"
                },
                "offers": {
                  "@type": "Offer",
                  "url": "${url || ""}",
                  "priceCurrency": "GUA",
                  "price": "${singleProduct[0]?.price || ""}",
                  "priceValidUntil": "2022-01-01",
                  "itemCondition": "https://schema.org/UsedCondition",
                  "availability": "https://schema.org/InStock"
                }
              }
            `
  //           ,
  //           }}
  // />
  
  
  
}

export default DatoEriquesido