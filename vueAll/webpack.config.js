var path = require("path");


module.exports = {

    //用来配置需要打包的入口文件
    entry:{
        app:path.resolve(__dirname,"main")
    },
    //配置打包后的文件名字和文件夹
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"[name].bundle.js"

    },
    devServer: {
        contentBase: "./build",  //以public为根目录提供文件
        historyApiFallback: true,
        inline: true
    },
    module:{
        rules:[
            {test:/\.(png|gif|jpg|jpeg|webp)$/,loader:"url-loader"},
            {test:/\.(eot|svg|ttf|woff)$/,loader:"url-loader"},
            {test:/\.vue$/,loader:"vue-loader"},
            {test:/\.css$/,loaders:"style-loader!css-loader"},
            {test:/\.js$/,loader:"babel-loader",query:{presets:["es2015","stage-0"]}}
        ]
    }



}