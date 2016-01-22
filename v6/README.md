# Webpack example v6

##Linting

We will use [ESLINT](http://eslint.org/) to lint our code, look at .eslintrc file, most IDE's will support eslint, 
adding this file to the IDE configuration will help you keep the code clean and with the team standards. For example 
one thing that is available in JS is having a string to be defined with single quote or double quotes, the eslint config
file can be setup so the IDE permits only one, for matter of simplicity we will allow only \' single quotes

Now for example look at this version of component2.js

    import "./style.css";
    
    const arrayOfStuff = [
      "stuff1",
      "stuff2",
      'stuff3'
    ];
    
    export default arrayOfStuff;
    
even though the JS is valid, _stuff3_ will fail the linting, when running webpack an error will be thrown for it, see:

    ERROR in ./component2.js
    
    /Users/gabrielespinola/git/webpack/v6/component2.js
      6:3  error  Strings must use doublequote  quotes
    
    ✖ 1 problem (1 error, 0 warnings)

To configure a simple loader was added on the _preloaders_ section of webpack config file

    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],

Generally speaking it is unacceptable to commit code with linting issues, please make sure you have eslint configured correctly
on your IDE

##Webpack plugins for code optimization

Lets use some webpack [plugins](https://webpack.github.io/docs/list-of-plugins.html)

- UglifyJsPlugin, Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode. 
You can pass an object containing UglifyJS options.
  
- AggressiveMergingPlugin, A plugin for a more aggressive chunk merging strategy. Even similar chunks are merged if the 
total size is reduced enough. As an option modules that are not common in these chunks can be moved up the chunk tree to the parents.

- DedupePlugin, Search for equal or similar files and deduplicate them in the output. This comes with some overhead for 
the entry chunk, but can reduce file size effectively.


There are several plugins that can be added to webpack config, in this case the piece that was added looks like this:

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap : false,
            comments : false
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ]

Now after running the build you will notice that the _bundle.js_ file is now smaller 4k instead of 12k from v5

##How to Run
Navigate to /v6 and on the console (alternatively you can run _run.sh_):
    
    >webpack

just like the others, look at index.html