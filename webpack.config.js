// var webpack = require('webpack');
var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry:'./src/lib/toast.js',
    output:{
        path:path.join(__dirname,'./dist'),
        publicPath:'',
        filename:'vue-toast-mobile.js',
        globalObject: 'this',
        libraryTarget: "umd",
        library: 'VueToastMobilePlugin',
        umdNamedDefine: true
    },
    module:{
        rules:[
            {
               test:/\.js$/,
               loader:'babel-loader',
               include:path.join(__dirname,'src'),
               exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                include:path.join(__dirname,'src'),
                exclude:/node_modules/,
            },
            {
              test: /\.styl(us)?$/,
              use: [
                'vue-style-loader',
                'css-loader',
                'postcss-loader',
                'stylus-loader'
              ]
            },
            {
              test: /\.less$/,
              use: [
                'vue-style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader'
              ]
            },
        ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
}