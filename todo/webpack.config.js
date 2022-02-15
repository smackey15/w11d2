const path = require('path');
module.exports = {
    entry: './todo_redux.jsx',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },

    devtool: 'source-map',
    resolve: {
        extensions: [".jsx", ".js", "..."],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },

    watchOptions: {
        poll: true,
        ignored: /node_modules/,
    },
}
