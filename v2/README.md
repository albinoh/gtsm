# Webpack example v2

Ok, now after understanding what happened on v1, lets try two components instead, in this example component1 uses 
component2, using _require_ webpack function does the trick, from component1:

    var stuffs = require('./component2')

what happened here is, whatever component 2 _exported_ will be assigned to the stuffs variable, look at component2:
 
    modules.export = arrayOfStuff;

webpack will analyze your entry file (_component1.js_) for dependencies to other files. These files (called modules) are included in your 
bundle.js too. webpack will give each module a unique id and save all modules accessible by id in the bundle.js file. 
Only the entry module is executed on startup. A small runtime provides the require function and executes the dependencies 
when required.

##How to Run
Navigate to /v2 and on the console (alternatively you can run _run.sh_):
    
    >webpack ./component1.js compiled/bundle.js
    
just like v1, index.html uses the newly created bundle that now contains the two components.