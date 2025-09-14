import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: options.paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),

        // с помощью DefinePlugin можно прокидывать в приложение глобальные переменные
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDev)
        })
    ]

    if(options.isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }

    return plugins
}