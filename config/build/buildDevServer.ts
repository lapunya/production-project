import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const {port} = options;
    // historyApiFallback Allows to proxy requests through a specified index page (by default 'index.html'), 
    // useful for Single Page Applications that utilise the HTML5 History API.
    return {
        port,
        historyApiFallback: true,
        hot: true,
        client: {
            overlay: false
        }
    }
}