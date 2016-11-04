const path = require('path');

module.exports = {
    entry: {
        app: ["./src/index.jsx"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
