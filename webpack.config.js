const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //   mode: "development",
  watch: true,
  entry: "./src/js/index.js",
  output: {
    filename: "./js/index.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.(less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: "url-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/index.bundle.css",
    }),
  ],
};
