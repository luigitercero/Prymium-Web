/* eslint-disable import/newline-after-import */
	// eslint-disable-next-line import/no-extraneous-dependencies
  const path = require('path')

  module.exports = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'src', 'styles')],
    },
  }
  