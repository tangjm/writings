const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    dom: "./src/dom.js", 
    writing: "./src/writing.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js", 
    clean: true
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
      scriptLoading: "defer",
      chunks: ['writing']
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, 
        use: ["style-loader", "css-loader"]
      },
    ]
  }
}