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
a simple SASS, for this we will be using [sass-loader](https://github.com/jtangelder/sass-loader). Lets review what we 
did step by step: 

On webpack.config.js replace the following loader

    {
        test: /\.css$/, loader: "style!css"
    }

with
    
    {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
    }

Notice this other syntax, loaders as an array instead of the bang separator, Remember we need all those dependencies 
and save them on the devDependencies on package.json, for that we ran the following on the console:

    npm install sass-loader node-sass --save-dev


After this has been added now we are ready to separate our css code for each component, under each component you will 
find a _.scss_ file that contains the style for that individual component.

## Bootstrap css

Lets also add support for bootstrap css, to do this, lets run: 

    npm install bootstrap-sass --save-dev

this will add bootstrap sass flavor to our project, then lets create the file /src/global/style/style.scss and 
include it on component1.js, this includes a reference to [normalize.css](https://necolas.github.io/normalize.css/) and
to the base styles needed to use bootstrap css syntax, also there are some references to other bootstrap components but
these are commented out just because we dont want to bloat our css, so uncomment if needed.

##Run with NPM

Also we just added a new section on package.json, the script section includes scripts that can be ran with 

    npm run <scriptName>

the _build_ command has been added, so this will be our entry point for the build from now on, this will be useful when
we start using gulp to build the application, more of that later, also build.sh has been removed.

##How to Run

Navigate to /v7 and type: 

    npm run build
    