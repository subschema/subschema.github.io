var path = require('path');
var join = path.join.bind(path, __dirname);
module.exports = function (options, webpack) {

    if (!webpack.externals.react) {
        webpack.resolve.alias.react = join('node_modules', 'react');
        webpack.resolve.alias['react-dom'] = join('node_modules', 'react-dom');
        webpack.resolve.alias['prop-types'] = join('node_modules', 'prop-types');
    }
    return webpack;
};
