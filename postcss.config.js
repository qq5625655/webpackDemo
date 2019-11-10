module.exports = {
    plugins: [
        // 能够使用scss，less等
      require('precss'),
      // 能够使用浏览器兼容，需要注意的是，vue-loader15版本后就不自带postcss了
      require('autoprefixer')({
        "browsers": [
            "defaults",
            "not ie < 11",
            "last 2 versions",
            "> 1%",
            "iOS 7",
            "last 3 iOS versions"
        ]
    })
    ]
  }