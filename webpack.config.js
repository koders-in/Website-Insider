const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    javascript: "./src/index.tsx",
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  //   loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|webp)$/i,
        use: ["file-loader", "webp-loader"],
      },
    ],
  },

  devServer: {
    port: 4000,
    open: true,
    hot: true,
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, "dist"),
    // },
    // compress: true,
    // watchContentBase: true,
    // contentBase: path.resolve(__dirname, "dist"),
  },

  resolve: {
    alias: {
      ["@"]: path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css",
    }),
    new HtmlWebpackPlugin({
      title: "Koders",
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
