const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    target: 'web', // bug in webpack dev server - cant have web and es5
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        // hot: true
    },


    devtool: 'inline-source-map',

};