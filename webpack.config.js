const path=require("path");

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output: {
        path: __dirname+"/dist",
        filename: "bundle.js"
    },
    devServer: {
      contentBase:'./dist'
    },
    module: {
        rules: [
            {test:/\.css$/, use: ['style-loader','css-loader']},
            {test:/\.(gif|img|png)$/, use: "file-loader"},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,use: ['url-loader']}
        ]
    }
}