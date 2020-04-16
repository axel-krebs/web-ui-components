const path = require('path');

module.exports = {
    mode: "production",
    context: path.resolve(__dirname, 'target'),
    entry: path.resolve(__dirname,"src/main/resource/index.js"),
    output: {
        path: path.resolve(__dirname, "target/published"),
        filename: "bundle.js",
        library: 'sposo-uilib',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.ts$/, use: 'ts-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
//    externals: [
//        'lit-element',
//        'lit-html'
//    ]
}
