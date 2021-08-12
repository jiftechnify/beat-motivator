const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devServer: {
    contentBase: "./public",
    port: 8080,
    host: "0.0.0.0",
  },
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "public"),
  },
};
