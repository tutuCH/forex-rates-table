const path = require('path');
function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  assetsDir: 'assets',
  publicPath: './',
  lintOnSave: false, // 是否开启编译时是否不符合eslint提示
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true
      }
    }
  },
  // transpileDependencies: ['vuetify'],
  // 配置别名
  chainWebpack: (config)=>{
    config.resolve.alias
        .set('@', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('router',resolve('src/router'))
        .set('utils',resolve('src/utils'))
        .set('static',resolve('src/static'))
        .set('store',resolve('src/store'))
        .set('views',resolve('src/views'))
  },
  // rules: [
  //   {
  //     test: /\.s(c|a)ss$/,
  //     use: [
  //       'vue-style-loader',
  //       'css-loader',
  //       {
  //         loader: 'sass-loader',
  //         // Requires sass-loader@^7.0.0
  //         options: {
  //           implementation: require('sass'),
  //           fiber: require('fibers'),
  //           indentedSyntax: true // optional
  //         },
  //         // Requires sass-loader@^8.0.0
  //         options: {
  //           implementation: require('sass'),
  //           sassOptions: {
  //             fiber: require('fibers'),
  //             indentedSyntax: true // optional
  //           },
  //         },
  //       },
  //     ],
  //   },
  // ]
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `
               @import "@/assets/css/variable.scss"; 
               @import "@/assets/css/common.scss";
               @import "@/assets/css/mixin.scss";
              `
      }
      
    }
  },
}
