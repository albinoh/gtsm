var
  //gulp is our runner
  gulp = require('gulp'),
  //we need webpack for running it from js
  webpack = require('webpack'),


  /** import utilities **/
  //some cool webpack plugins, the plugins are loaded dynamically looking at node_modules and loading
  //anything that matches the pattern gulp-* more options are available here:
  //https://www.npmjs.com/package/gulp-load-plugins
  //in this case we only need the "util" plugin
  $ = require('gulp-load-plugins')(),

  //utility to delete files from the fs
  del = require('del');


//this is our main task, can be ras as:
// >gulp
//noinspection JSUnresolvedFunction
gulp.task('default', ['clean', 'bundle']);

//clean resources from previous build
//noinspection JSUnresolvedFunction
gulp.task('clean', del.bind(
  null, ['.tmp', 'build/*'], {dot: true}
));

// Bundle resources, mostly webpack
//noinspection JSUnresolvedFunction
gulp.task('bundle', function(cb) {

  var started,
    config;

  started = false;

  //get the webpack configuration
  config = require('./webpack.config.js');

  //create a new webpack object with the configuration we just loaded, and make it run!
  webpack(config).run(function (err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    $.util.log('[webpack]', stats.toString({colors: true}));

    if (!started) {
      started = true;
      return cb();
    }
  });
});