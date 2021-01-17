import React from 'react';
import Head from "next/head";

const useSEO = ({ description, keywords, title, children }) => {

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="luigitercero" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
    </>
  )
}

export default useSEO