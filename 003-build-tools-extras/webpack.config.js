const path = require('path');

module.exports = {
    mode: 'production',
    // mode: 'development',
    entry: {
        app: './app.js'
    },
    devtool: 'sourcemap',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        rules: [
            /* Support TypeScript */
            // {test: /\.tsx?$/, loader: 'ts-loader'},

            /* Support HTML */
            // {test: /\.html$/, use: ['html-loader']},

            /* Support SVG */
            // {test: /\.svg$/, use: ['svg-inline-loader']},
        ]
    }
}
