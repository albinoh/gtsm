# Webpack example v8

## Add gulp

[gulp](http://gulpjs.com/) will allow us to add steps to the build, before and after webpack packaging.

- First install it, global

```sh
sudo npm install --global gulp
```
- Install gulp and some other things we will be using

```sh
npm install gulp gulp-load-plugins del minimist gulp-util --save-dev
```
- Create a gulpfile.js at the root of the project

```js
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```

You can see that the task name is _default_, this means that running

```sh
gulp
```

will execute whatever is there, this is equivalent of running 

```sh
gulp default
```

currently we will only do the build so lets add a couple of new tasks

```js

gulp.task('default', ['clean', 'bundle']);

// clean from previous build
gulp.task('clean', ...);

// Bundle
gulp.task('bundle', function(cb) {
...
});
```

please look at the gulp file and try to understand what is happening.

##How to build

package.json now has been modified to run gulp target, but since we are using npm scripts we will run with npm, there are
now two tasks:

```sh
    npm run default
```

and a release version (currently this one is the one that minimizes the js bundle, look at webpack.config.js file):

```sh
    npm run default-release
```