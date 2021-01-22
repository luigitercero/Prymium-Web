import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
       
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8323542.js" />

      </Html>
    )
  }
}

export default MyDocument
