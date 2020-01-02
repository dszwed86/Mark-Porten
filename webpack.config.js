module.exports = {
    entry: {
        main: "./src/js/script.js",
        // vendor: "",  miejsce na vendora
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    // loader: "file-loader",
                    options: {
                        limit: 8192,
                        name: "[name].[hash].[ext]",
                        outputPath: "img"
                    }
                }
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
        ],
    },
}