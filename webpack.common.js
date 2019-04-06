const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",// 3. Inject style into DOM
          "css-loader", // 2. CSS => JS
          "sass-loader" // 1. SCSS => CSS
        ]
      }
    ],
  }
}
