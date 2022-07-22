const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/itbaizhan/covid19/'
    : '/'
}


module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://iwenwiki.com',
        changeOrigin: true,
      },
    }
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
}