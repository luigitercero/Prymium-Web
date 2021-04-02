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

  constructor (props) {
    super(props)
    TagManager.initialize(tagManagerArgs)

  }

  render() {
   
    return (
      <Html lang="es">
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
