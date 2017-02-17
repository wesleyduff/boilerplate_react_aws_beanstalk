var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.resolve('public/assets/js/'),
        publicPath: '/assets/js/',
        filename: 'bundle.js'
    },
    
    module: {
        
        loaders: [
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/, loader: "url-loader" },
            { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
          /*  { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
            { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
            { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }*/
        ],
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                jquery: 'jquery'
            })
        ]
    },
    

    
    resolve: {
        extensions: ['', '.js', '.es6']
    }
}