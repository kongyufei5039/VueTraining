module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
      }
    }
  }