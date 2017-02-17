var path = require('path');
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
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    
    resolve: {
        extensions: ['', '.js', '.es6']
    }
}