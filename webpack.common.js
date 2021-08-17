const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "assets", to: "" }], // copy all files under /assets to /public
    }),
  ],
};
