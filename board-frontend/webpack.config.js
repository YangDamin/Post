const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    mode: 'development',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.?(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
                resolve: {
                    extensions: ['', '.js', '.jsx'],
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {                // 서버 설정
        hot: true,
        host: 'localhost',          // 도메인 설정
        port: 3000,                     // 포트 번호
        historyApiFallback: true            // 히스토리 API를 사용하는 SPA 개발 시 설정함, 404가 발생하면 index.html로 리다이렉트한다.
    },
};