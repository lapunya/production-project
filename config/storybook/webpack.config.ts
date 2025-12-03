import webpack, { DefinePlugin, RuleSetRule } from "webpack"
import { BuildPaths } from "../build/types/config"
import path from "path"
import { buildCssLoader } from "../build/loaders/buildCssLoaders"

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    
    // Fix for yoga-layout-prebuilt native module issue
    config.resolve = {
        ...config.resolve,
        fallback: {
            ...config.resolve?.fallback,
            fs: false,
            path: false,
        },
    };
    
    // Exclude yoga-layout-prebuilt from webpack processing
    config.externals = config.externals || [];
    if (Array.isArray(config.externals)) {
        config.externals.push({
            'yoga-layout-prebuilt': 'commonjs yoga-layout-prebuilt',
        });
    }
    // eslint-disable-next-line no-param-reassign
    let formattedRules = 
        config.module?.rules?.map((rule?: undefined | null | false | "" | 0 | RuleSetRule | "...") => {
        // в дефолтном конфиге сторибука находим правило, которое обрабатывает свг, правим его, чтобы потом пушнуть
        // настройки свг лоадера из общего вебпак конфига
            if(rule && rule !=='...' && /svg/.test(rule.test as string)) {
                return {...rule, exclude: /\.svg$/i}
            }
            return rule;
        })

    formattedRules?.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });

    formattedRules?.push(buildCssLoader(true));

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('')
    }))
    
    // Ignore yoga-layout-prebuilt native bindings to prevent writeFile errors
    config.plugins?.push(new webpack.IgnorePlugin({
        resourceRegExp: /yoga-layout-prebuilt\/yoga-layout\/build\/Release\/nbind\.js$/,
    }))

    return {...config, module: {...config.module, rules: [...formattedRules || []]}}
}