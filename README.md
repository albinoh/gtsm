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