import React from 'react';
import Head from "next/head";

const useSEO = ({ description, keywords, title, children, img, url }) => {

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="luigitercero" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="Productos para cocina" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={img} />

        <link rel="image_src" href={img} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:image" content={img} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context" : "http://schema.org",
              "@type" : "LocalBusiness",
              "name" : "Lavatrastos Prymium",
              "image" : "https://www.lavatrastosprymium.com/wp-content/themes/nuevo_estilo_theme/image/prymium.jpg",
              "telephone" : "2485-5176",
              "address" : {
                "@type" : "PostalAddress",
                "streetAddress" : "3a. calle 3-54 boulevard San Cristobal",
                "addressLocality" : "zona 8",
                "addressRegion" : "Mixco"
              }
            }
          `,
          }}
        />
      </Head>
      {children}
    </>
  )
}

export default useSEO