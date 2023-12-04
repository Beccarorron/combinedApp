const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(--dirname, 'static'),
    },
    module: { rules: [
        {
            test: /\.js$/,
            include: [
                path.resolve(--dirname, 'src')
            ],
            use: ['babel-loader'],
        },
    ]},
};