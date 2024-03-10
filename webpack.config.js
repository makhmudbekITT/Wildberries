const path = require('path');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        index: "./index.js",
        goods: "./goods.js"
    },

    output: {
        filename: "./js/[name].js",
        path: path.resolve(__dirname, "./")
    },

    devServer: {
        hot: true,
        port:3000,
        compress: true,
        static: {
            directory:path.join(__dirname, "./"),
            watch: true
        }
    }
}