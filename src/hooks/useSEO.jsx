import React from 'react';
import Head from "next/head";
import { useRouter } from 'next/router'  

const normalizePath = (path = '/') => {
  if (!path) {
    return '/';
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return path.startsWith('/') ? path : `/${path}`;
};

const toAbsoluteImage = (image, siteUrl) => {
  if (!image) {
    return `${siteUrl}/images/logo/logo-prymium-header.webp`;
  }

  if (image.startsWith('http://') || image.startsWith('https://')) {
    return image;
  }

  const normalized = image.startsWith('/') ? image : `/${image}`;
  return `${siteUrl}${normalized}`;
};

const useSEO = ({
  description,
  keywords,
  title,
  children,
  img,
  DatoEriquesido,
  type = 'website',
  structuredData = []
}) => {
  const router = useRouter()
  const siteUrl = 'https://www.lavatrastosprymium.com';
  const currentPath = normalizePath(router.asPath || '/');
  const canonical = `${siteUrl}${currentPath}`;
  const seoImage = toAbsoluteImage(img, siteUrl);
  const extraStructuredData = Array.isArray(structuredData) ? structuredData : [];

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
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:locale" content="es_GT" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={seoImage} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="image_src" href={seoImage} />
        <link rel="canonical" href={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
        <meta name="twitter:image" content={seoImage} />

        {DatoEriquesido ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: DatoEriquesido
            }}
          />
        ) : null}

        {extraStructuredData.map((jsonLd, index) => (
          <script
            key={`jsonld-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        ))}

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Lavatrastos Prymium',
            image: seoImage,
            url: siteUrl,
            priceRange: '$$$$',
            telephone: '2485-5176',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '3a. calle 3-54 boulevard San Cristobal',
              addressLocality: 'zona 8',
              addressRegion: 'Mixco',
              addressCountry: 'GT'
            },
            sameAs: [
              'https://www.facebook.com/lavatrastosprymium',
              'https://www.instagram.com/lavatrastosprymium/',
              'https://www.youtube.com/@lavatrastosprymium6962'
            ]
          })
        }} />

      </Head>
      {children}
    </>
  )
}

export default useSEO