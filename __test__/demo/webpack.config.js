const sysPath = require('path');


module.exports = {
    mode: 'development',
    entry: ".__test__/demo/index.js",
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