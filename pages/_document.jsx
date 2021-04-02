import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  id: 'GTM-NKSQN8N '
}
class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  componentDidMount() {
   // TagManager.initialize(tagManagerArgs)
  }

  render() {

    return (
      <Html lang="es">

        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NKSQN8N');`}}
          />

        </Head>

        <body>
          <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKSQN8N"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
          />
          <Main />
          <NextScript />
        </body>

        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8323542.js" />

      </Html>
    )
  }
}

export default MyDocument
