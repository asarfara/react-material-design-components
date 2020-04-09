module.exports = {
    components: 'src/components/**/[A-Z]*.js',
    dangerouslyUpdateWebpackConfig(webpackConfig, env) {
        let entryPoints = webpackConfig.entry;

        Array.prototype.unshift.apply(entryPoints, [ __dirname + '/styleguide/style.js']);

        webpackConfig.entry = entryPoints;
        return webpackConfig
    }
};