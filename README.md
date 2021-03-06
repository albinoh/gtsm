#Webpack examples and usage

##What is webpack?
[Webpack](https://webpack.github.io/) is a module bundler, this means webpack takes modules with dependencies and emits 
static assets representing those modules.  

![Alt text](https://webpack.github.io/assets/what-is-webpack.png)

##How to install?

- node.js, make sure [node.js](https://nodejs.org/en/) is installed
- webpack installed globally (this allows to run >webpack from the console)
    
    >sudo npm install webpack -g 

##Examples

- v1 is a very basic webpack hello world, takes one module and creates a simple bundle with it, then a simple html page 
    uses that bundle
    
- v2 now instead of just one component, this example uses two and it will show how to require a component from another
    one
    
- v3 multiple components and now also css, use a simple loader inline

- v4 intro to webpack configuration file, binding loaders and package.json

- v5 babel!

- v6 ESLINT, Also minification, obfuscation, dedupping and aggressive merging (using webpack plugins)

- v7 Separate components on its own directory, add SASS support, add basic bootstrap css and use _npm run build_ to build.

- v8 Add Gulp build system

##What is next/missing?

Well, this is just an intro on webpack and how can it be leveraged to package, bundle, resolve and even transpile JS. 
Of course webpack is just one part of the whole puzzle, but a very important part. A couple of things that are missing
that can be added on a v6 example (or more):

- Start using react on the sample app and start doing something more complex
- Flow support
- Testing, this is a whole subject but webpack can't help here
- Evaluate if server side rendering is needed and what needs to be done to accomplish it, Look at 
[isomorphic apps](https://strongloop.com/strongblog/node-js-react-isomorphic-javascript-why-it-matters/).


#Development server

There are some options that we can use to just test our JS code while on dev mode, depending on our infrastructure we can use:
 
- [browsersync](https://www.browsersync.io/), my favorite, very very cool stuff.
- [webpack dev server](http://webpack.github.io/docs/tutorials/getting-started/#development-server), very basic and ready to use
with any of the versions on this tutorial
- Of course any other flavor/combination if a web server is already running, for example vertx on a docker machine. Webpack file 
watcher can be setup to run and mount the build (compiled) directory on the docker vm so any changes will reflect immediately on
refresh. 

#Bugs/questions/enhancements

Do you want to see something else here? Do you have questions or suggestions, please go [ahead](https://github.com/gabroe/webpackExamples/issues).