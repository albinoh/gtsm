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

##What is next/missing?

Well, this is just an intro on webpack and how can it be leveraged to package, bundle, resolve and even transpile JS. 
Of course webpack is just one part of the whole puzzle, but a very important part. A couple of things that are missing
that can be added on a v6 example (or more):

- Building (and related phases), for this _gulp_ is our choice, gulp will eventually call webpack as one of the build phases
- Linting, _eslint_ is the way to go here, there is a eslint-loader that will check for syntax at build time
- Minification and obfuscation, _uglifyjs_ loader can be used here
- CSS Scripting (SASS, LESS) though respective loaders can be used to transform scss or less files to css
- Testing, this is a whole subject but webpack can't help here

#Development server

There are some options that we can use to just test our JS code while on dev mode, depending on our infrastructure we can use:
 
- [browsersync](https://www.browsersync.io/), my favorite, very very cool stuff.
- [webpack dev server](http://webpack.github.io/docs/tutorials/getting-started/#development-server), very basic and ready to use
with any of the versions on this tutorial
- Of course any other flavor/combination if a web server is already running, for example vertx on a docker machine. Webpack file 
watcher can be setup to run and mount the build (compiled) directory on the docker vm so any changes will reflect immediately on
refresh. 