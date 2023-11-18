const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    index: "./src/index.js",
    dom: "./src/dom.js", 
    writing: "./src/writing.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js", 
    clean: true,
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: "body",
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: "writing.html",
      template: "./src/writing.html",
      inject: "body",
      chunks: ['writing']
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, 
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
    ]
  }
}