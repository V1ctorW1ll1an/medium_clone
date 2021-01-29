module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: "@import '@/assets/scss/_index.scss';"
      }
    }
  }
}
