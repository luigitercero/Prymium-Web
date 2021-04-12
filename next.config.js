/* eslint-disable import/newline-after-import */
	// eslint-disable-next-line import/no-extraneous-dependencies
  const path = require('path')
  const withWorkbox = require("next-with-workbox");
  module.exports = withWorkbox( {
    sassOptions: {
      includePaths: [path.join(__dirname, 'src', 'styles')],
    }, 
    workbox: {
      dest: "public",
      swDest: "sw.js",
      swSrc: "worker.js",
      force: true,
    },
    async redirects() {
      return [
        {
          source: '/productos-2/',
          destination: '/tienda',
          permanent: true,
        },
        {
          source: '/producto-2/',
          destination: '/tienda',
          permanent: true,
        },
        {
          source: '/product-2/',
          destination: '/tienda',
          permanent: true,
        },
        {
          source: '/store-lavatrastos-grifos-bidet-guatemala/',
          destination: '/tienda',
          permanent: true,
        },
        {
          source: '/mantenimiento/',
          destination: '/preguntas',
          permanent: true,
        },
        {
          source: '/especificaciones/',
          destination: '/preguntas',
          permanent: true,
        },
        {
          source: '/nosotros/',
          destination: '/preguntas/',
          permanent: true,
        },
        {
          source: '/garantia/',
          destination: '/preguntas/',
          permanent: true,
        },
        {
          source: '/producto/:slug*',
          destination: '/tienda/:slug*',
          permanent: true,
        },
      ]
    },
  })
  