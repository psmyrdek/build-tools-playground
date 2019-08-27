const path = require('path');

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: {
        app: './app.js'
    },
    devtool: 'sourcemap',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    }
}
