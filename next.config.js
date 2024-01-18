const path = require('path')
const withWorkbox = require("next-with-workbox");

module.exports = withWorkbox({
  // Uncomment the line below to enable basePath, pages and
  // redirects will then have a path prefix (`/app` in this case)
  //
  // basePath: '/app',

  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')]
  },
 
  async redirects() {
    return [
      {
        source: '/productos-2',
        destination: '/tienda',
        permanent: true,
      },

      {
        source: '/store-lavatrastos-grifos-bidet-guatemala',
        destination: '/tienda',
        permanent: true,
      },

      {
        source: '/mantenimiento',
        destination: '/preguntas',
        permanent: true,
      },

      {
        source: '/especificaciones',
        destination: '/preguntas',
        permanent: true,
      },

      {
        source: '/nosotros',
        destination: '/preguntas',
        permanent: true,
      },

      {
        source: '/garantia',
        destination: '/preguntas',
        permanent: true,
      },

      {
        source: '/producto/:slug*',
        destination: '/tienda/:slug*',
        permanent: true,
      },

      {
        source: '/prensa-libre',
        destination: '/',
        permanent: false,
      },

      {
        source: '/el-periodico',
        destination: '/',
        permanent: false,
      }
    ]
  }

})
