module.exports = {
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import '@/assets/scss/_index.scss'"
      }
    }
  }
}