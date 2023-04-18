'use strict'

module.exports = {
  devServer: {
    proxy: {
      '/test': {
        target: 'http://116.205.190.209:90',
        changeOrigin: true,
        pathRewrite: {
          '^/test': 'test'
        }
      }
    }
  }
}
