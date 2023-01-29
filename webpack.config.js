const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: process.env.NODE_ENV,
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HTMLWebpackPlugin({
            // title: 'Development',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build')
        },
        proxy: {
            '/': 'https://main--extraordinary-taiyaki-db6e00.netlify.app/',
        }
    }
}