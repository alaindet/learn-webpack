const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
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
