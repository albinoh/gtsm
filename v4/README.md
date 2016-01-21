# Webpack example v4

We don’t want to write such long requires _require("!style!css!./style.css")_

We can bind file extensions to loaders so we just need to write: require("./style.css") so lets update the components, 
specifying the loader can be done on the command line at build time:

    webpack ./entry.js bundle.js --module-bind 'css=style!css'
    
But that honestly is maybe uglier, webpack supports a config file _webpack.config.js_, see what is inside of it:

    module.exports = {
        entry: "./entry.js",
        output: {
            path: __dirname,
            filename: "bundle.js"
        },
        module: {
            loaders: [
                { test: /\.css$/, loader: "style!css" }
            ]
        }
    };

now the entry point, output config and loaders are speficied there, no need to do anything else on the console, note how
running the build changed:

##How to Run
Navigate to /v4 and on the console (alternatively you can run _run.sh_):
    
    >webpack
    
note that now because _webpack.config.js_ has the entry point and the loaders so now building is just matter of one command,
remember to open index.html to see the results!