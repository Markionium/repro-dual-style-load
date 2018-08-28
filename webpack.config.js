const LoadThemedStylesLoader = require('@microsoft/loader-load-themed-styles');

LoadThemedStylesLoader.loadedThemedStylesPath = "./MyLoader";

module.exports = {
    mode: "production",
    output: {
        publicPath: 'dist/'
    },
    optimization: {
        minimize: false
    },

    module: {
        rules: [
          {
            test: /\.less$/,
            use: [
            {
                loader: "@microsoft/loader-load-themed-styles",
                options: {
                    async: true
                }
            },
            {
                loader: "css-loader",
                options: {
                    minimize: { orderedValues: false },
                    modules: true,
                    importLoaders: 1,
                    localIdentName: "[name]__[local]__[hash:base64:5]"
                }
            },
            {
                loader: "less-loader",
                options: { compress: false }
            }]
          }
        ]
      }
};