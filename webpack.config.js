const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: process.env.NODE_ENV,
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Development',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
                // {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['@babel/preset-env', '@babel/preset-react']
                //     }
                // }
            },
            // {
            //     test:/\.s?css/,
            //     use: ['style-loader', 'css-loader']
            // },
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
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build')
        },
        proxy: {
            '/': 'http://localhost:3000',
        }
    }
}