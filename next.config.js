/* eslint-disable import/newline-after-import */
	// eslint-disable-next-line import/no-extraneous-dependencies
  const path = require('path')
  const withWorkbox = require("next-with-workbox");
  module.exports = withWorkbox( {
    sassOptions: {
      includePaths: [path.join(__dirname, 'src', 'styles')],
    }, workbox: {
      dest: "public",
      swDest: "sw.js",
      swSrc: "worker.js",
      force: true,
    },
  })
  