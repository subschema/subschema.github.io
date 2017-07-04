var path = require('path');
function findBabel(v) {
    if (!v) return false;
    if (v === 'babel-loader' || v.loader == 'babel-loader') return true;
    if (Array.isArray(v)) {
        return v.find(findBabel);
    }

    if (Array.isArray(v.use)) {
        return v.use.find(findBabel);
    }
    return findBabel(v.use);
}
module.exports = function (options, webpack) {
    console.warn(`using wiki`);

    const babel = webpack.module.rules.find(findBabel);

    webpack.module.rules.push(
        {
            test: /\.md$/,
            include: [
                path.join(__dirname, 'src')
            ],
            use: [].concat(babel.use, {loader: require.resolve('markdown-component-loader')})
        });


    return webpack;
};
