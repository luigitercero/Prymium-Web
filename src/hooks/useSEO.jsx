import React from 'react';
import Head from "next/head";
import { useRouter } from 'next/router'

const useSEO = ({ description, keywords, title, children, img, url }) => {
  const router = useRouter()
  return (
    <>
    
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/images/icons/water-tap.ico" type="image/x-icon" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="luigitercero,chunfer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Lavatrastos de Lujo, Griferia de Lujo, Bidet, bide, fregaderos de lujos, lavatrastes lujo , lavaplatos de lujo, chorros de acero inoxidable, lavatrastos de acero inoxidable, lavatrastos para concina, griferia de baño, griferia de cocina, lavatrastos,chorros,bidet, grifos, lujo, acero inoxidable" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="Productos para cocina" />
        <meta property="og:url" content={`https://lavatrastosprymium.com${router.asPath}`} />
        <meta property="og:image" content={img} />
        

        <link rel="manifest" href="/manifest.json" />

        <link rel="image_src" href={img} />
        <link rel="canonical" href={`https://lavatrastosprymium.com${router.asPath}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={`https://lavatrastosprymium.com${router.asPath}`} />
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