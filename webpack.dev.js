const { merge } = require("webpack-merge");
const common = require("./webpack.common.js")

common.output.publicPath = ""; 

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
});