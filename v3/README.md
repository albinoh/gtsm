# Webpack example v3

The beauty of webpack is that it doesnt just work on js files, it works on any file type, this is done using what webpack
calls _loaders_, javascript is native but in this example we will do css, for that _css-loader_ and _style-loader_ are needed, 
for this run

    >npm install css-loader style-loader
    
- style-loader: Adds some css to the DOM by adding a <style> tag
- css-loader: Bundles all css together on one file

note that this is *not* a global install, so it will create _node_modules_ folder with two modules on it, webpack will look
for them there.

style.css has been added now, and will be required by component1 *and* component2, just to prove the point that multiple
modules can include the same module and webpack will resolve and include it only once, to include the css file we need to 
tell webpack which loader needs to be used, to tell Webpack to transform a module with a 
loader, you can specify the loader in the module request, such as in a require call, from component1 or component2:

    require("!style!css!./style.css");
    
Notice the ! syntax separating the loader from the module path. Loaders can be also be chained together by separating 
loaders with the !. This is helpful for applying multiple transformations to a file in a pipeline, in this case the chain
goes from right to left, so in our case first the css loader is applied and then the style one.

##How to Run
Navigate to /v3 and on the console (alternatively you can run _run.sh_):
    
    >webpack ./component1.js compiled/bundle.js
    
just like v1 and v2, index.html uses the newly created bundle that now contains the two components.