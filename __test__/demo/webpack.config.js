const sysPath = require('path');


module.exports = {
    mode: 'development',
    entry: "./__test__/demo/index.js",
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            exclude: /node_modules/,
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
          },
        ],
      },
      resolve: {
        extensions: [".ts", ".js"],
      },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js",
      },
    devtool: "inline-source-map",
    devServer: {
        static: "./__test__/demo",
    },
}   