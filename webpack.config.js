const webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + "/build",
        filename : "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:[ 'es2015', 'react', 'stage-2' ]
                }
            },
            {
                test: /\.css$/,
                loader : ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg)$/,
                use:{
                    loader: "url-loader",
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};