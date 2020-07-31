const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  //   mode: "development",
  watch: true,
  entry: "./src/js/index.js",
  output: {
    filename: "./js/index.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "..",
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              parser: "postcss-less",
              importLoaders: 1,
              plugins: [
                autoprefixer(),
              ],
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [`file-loader?name=/fonts/[name].[ext]`],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          `file-loader?name=/img/[name].[ext]`,
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: false,
                quality: 100,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 100,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/index.bundle.css",
    }),
  ],
};
