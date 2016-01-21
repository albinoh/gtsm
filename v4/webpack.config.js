module.exports = {
    entry: "./component1.js",
    output: {
        path: __dirname, //__dirname is a node.js global string that has the path to the root
        filename: "compiled/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};