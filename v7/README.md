# Webpack example v7

## Component compartmentalization

Since the project now is growing we will separate the components on individual directories under _components/componentName_. 
There are different flavors of what can be done here, when using webpack we can import a package poiting to its head JS file 
like this:

    import stuffs from "components/component2/component2.js";
    
but it is a little bit redundant, what we want is:

    import stuffs from "components/component2";

for that there are two options:
    
1. rename _component2.js_ to _index.js_, the module loader will look for _index.js_
2. add a new _/components/component2/package.json_ file that contains the _main_ field

A sample package.json for the second case:

    { 
      "name": "component2",
      "description": "this component contains a list of stuffs",
      "version": "1.0.0",
      "main": "component2.js"
    }

Flavor 1 seems easier, the only problem I find with it is the fact that there will be tons of index.js files and it will
be very difficult to search for a module by file name, because of that I prefer the second flavor, also it allows us to
document more about the component. So we will go for the second.

## SASS

Since now we are separating the components we can also split the css code, but we will go a step further and add SASS support
a simple SASS, for this we will be using [postcss](https://github.com/postcss/postcss), PostCSS is a tool for transforming 
styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, 
inline images, and more. Lets review what we did step by step: 

On webpack.config.js replace the following loader

    {
        test: /\.css$/, loader: "style!css"
    }

with
    
    {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
    }

Remember we need all those dependencies and save them on the devDependencies on package.json, for that we ran the following
on the console:

    npm install sass-loader node-sass webpack --save-dev


After this has been added now we are ready to separate our css code for each component, under each component you will 
find a _.scss_ file that contains the style for that individual component.

## Bootstrap css

Lets also add support for bootstrap css, to do this, lets run: 

    npm install bootstrap-sass --save-dev

this will add bootstrap sass flavor to our project, then the file /src/style/style.scss has been created and has been
included on component1.js, this file includes all bootstrap base elements and has some other more complex ready to be
used if needed (uncomment the required line).

##How to Run
Navigate to /v7 and on the console (alternatively you can run _run.sh_):
    
    >webpack

just like the others, look at index.html