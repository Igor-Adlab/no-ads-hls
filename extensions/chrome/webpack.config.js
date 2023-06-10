require('dotenv').config();

const path = require('path');
const webpack = require('webpack');

const config = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        inject: './src/inject.js',
        background: './src/background.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.WEB_URL': JSON.stringify(process.env.WEB_URL),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.WIDGET_URL': JSON.stringify(process.env.WIDGET_URL),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    }
};

module.exports = config;
