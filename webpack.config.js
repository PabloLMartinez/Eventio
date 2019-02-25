const path = require("path");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("brotli-gzip-webpack-plugin");

const production = process.env.NODE_ENV !== "local";
const devtool = !production ? "inline-source-map" : "";

const extractSass = new ExtractTextPlugin({
    filename: "[name].[hash].css",
    allChunks: true,
    disable: !production
});

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "src/index.html",
    filename: "index.html",
    inject: "body"
});

const minimize = new webpack.LoaderOptionsPlugin({
    minimize: true
});

const sources = [
    "babel-polyfill",
    "./src/index.js"
];

let plugins = [
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(["build"]),
    htmlWebpackPluginConfig,
    extractSass,
    new Dotenv(),
    new CopyWebpackPlugin([ { from: "assets", to: "assets" } ]),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.[hash].js",
        minChunks: function(module) {
            if (module.resource && (/^.*\.(css|scss)$/).test(module.resource)){
                return false;
            }
            return module.context && module.context.includes("node_modules");
        }
    })
];

if(production){
    plugins = [
        ...plugins,
        new CompressionPlugin({
            asset: "[path].br[query]",
            algorithm: "brotli",
            test: /\.(js|css|scss|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
            quality: 11
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|css|scss|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        minimize,
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        })
    ];
}

module.exports = {
    entry: sources,
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].[hash].bundle.js"
    },
    devtool,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                "babel-loader"
            ]
        },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader",
                    options: {
                        minimize: true
                    }
                }, "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ],
            }]
    },
    resolve: {
        modules: [
            path.join(__dirname, "node_modules")
        ],
        alias: {
            lib: path.join(__dirname, "/src/lib")
        }
    },
    devServer: {
        contentBase: "./build",
        hot: true,
        historyApiFallback: true,
        compress: true
    },
    plugins: plugins
};

