# Webpack example v5

OK, now it is time to really use this, lets plugin the [babel.js](http://babeljs.io/) loader, babel is the preferred 
js transpiler, it converts [ES2015 JS](http://babeljs.io/docs/learn-es2015/) (also known as ES6 JS) syntax to regular 
JS that it can be read by any browser (or node.js).
 
##ECMAScript 6 Features

- Arrows and Lexical This
- Classes
- Enhanced Object Literals
- Template Strings
- Module loaders
- Promises
- Reflect API

... and much [more](https://github.com/lukehoban/es6features#readme)

this is THE way to go with JS nowadays, it is much easier to write and to read, it is object oriented natively and it
is compatible with old school JS, this WILL make your application much better. 

##JSX and REACT

Babel has support for JSX and Flow. Check out our React preset to get started. Use it together with the [babel-sublime](https://github.com/babel/babel-sublime) 
package to bring syntax highlighting to a whole new level (if sublime is your thing).

##What changed from v4

Lets compare v4 and v5, components:

###component1.js
    
####v4

    var stuffs = require('./component2');
    require("./style.css");
    
    document.write('Stuff is coming:<br>');
    
    stuffs.forEach(function (stuff) {
        document.write('<span class="stuff">' + stuff + '</span>');
        document.write('<br/>');
    });

####v5
    
    import stuffs from './component2';
    import "./style.css";
    
    document.write('Stuff is coming:<br>');
    
    for(var stuff of stuffs){
        document.write('<span class="stuff">' + stuff + '</span>');
        document.write('<br/>');
    };

###component2.js
    
####v4

    require("./style.css");
    
    var arrayOfStuff = [
        'stuff1',
        'stuff2',
        'stuff3'
    ];
    
    module.exports = arrayOfStuff;


####v5
    
    import "./style.css";
    
    const arrayOfStuff = [
        'stuff1',
        'stuff2',
        'stuff3'
    ];
    
    export default arrayOfStuff;



##How to Run
Navigate to /v5 and on the console (alternatively you can run _run.sh_):
    
    >webpack

just like v4 and before, run index.html