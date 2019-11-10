const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 在webpack4中 应该使用npm install extract-text-webpack-plugin@next --save-dev来安装这个插件
// 使用这个插件后无法实时加载
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  // target: "node",
  //   entry: ['react-hot-loader/patch', __dirname + "/app/main.js"], //已多次提及的唯一入口文件
  entry: {
    bundle: [__dirname + "/app/main.js"],
  },
  output: {
    path: __dirname + "/build", //打包后的文件存放的地方
    filename: '[name].js', //打包后输出文件的文件名
    // publicPath: './build'
  },
  devtool: "eval-source-map", //打包速度不同
  devServer: {
    contentBase: "./build", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    // publicPath: "./build"

    // webpack-dev-server 只是针对js进行一次实时刷新，而对其他的，例如html，css没有实时刷新
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        // / 它会应用到普通的 `.js` 文件
        // 以及 `.vue` 文件中的 `<script>` 块
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-syntax-dynamic-import"
            ]
          },
          // options: {
          // presets: [
          //   "@babel/preset-react", "@babel/preset-env" // 改版，需要用到@babel/core
          //   // 也就是说，命令改为npm i -D @babel/core @babel/preset-env @babel/preset-react
          // ],
          //   "env": [
          //     ["react-transform", {
          //       "transforms": [{
          //         "transform": "react-transform-hmr",
          //         "imports": ["react"],
          //         "locals": ["module"]
          //       }]
          //     }]
          //   ]
          //   // "plugins": {
          //   //   "development": {
          //   //   }
          //   // }
          // }
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader" //css的loader是从后往前的。
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        // 拥有了选项
        test: /\.scss$/,
        // use:["vue-style-loader",'css-loader','sass-loader']
        // use: [
        //   "vue-style-loader",
        //   //   {
        //   //     loader: 'css-loader',
        //   //     options: { modules: true }
        //   //   },
        //   "css-loader",
        //   "sass-loader"
        // ]
      }
      //   {
      //     test: /\.css$/,
      //   //   use: ExtractTextPlugin.extract({
      //   //     // extract默认行为先使用css-loader编译css如果一切顺利的话，结束之后把css导出到规定的文件去。
      //   //     // 失败的话使用style-loader处理css
      //   //     fallback: "style-loader",
      //   //     use: "css-loader"
      //   //   })

      //     use: [{
      //       loader: "style-loader",
      //     }, {
      //       loader: "css-loader",
      //       options: {
      //         modules: {
      //             modules: true,
      //           localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
      //         }, // 指定启用css modules
      //         // 这里与原版的webpack配置不一样了，需要安装官方英文版的使用。

      //       }
      //     }]
      //   }

      //   {
      // test: /\.css$/,
      //     use: [
      //       {
      //             loader: 'style-loader'
      //             //css-loader 和 style-loader，二者处理的任务不同，
      //             //css-loader使你能够使用类似@import 和 url(...)的方法实现
      //             //require()的功能,style-loader将所有的计算后的样式加入页面中，
      //             //二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中
      //         },
      //         {
      //             loader: 'css-loader',
      //             // options: {
      //             //     module: true
      //             // }
      //         },

      //     ]
      // },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    /**
     * 这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 
    .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 
    的规则，那么它会应用到 .vue 文件里的 <script> 块。
    */
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.html" //new 一个这个插件的实例，并传入相关的参数
    })
    //   new webpack.HotModuleReplacementPlugin(),//热加载插件
    // 重命名提取后的css
    // new ExtractTextPlugin("style.css") //分离css，不要将它打包进JS里面。
  ],
  resolve: {
    // 引入路径不用谢对应的后缀名
    extensions: [".js", ".vue", ".json"],
    // 使用template的时候需要使用
    alias: {
      vue$: "vue/dist/vue.esm.js", // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      '@': path.resolve(__dirname, './app')   //当前目录下的/app目录下
    }
  }
};
