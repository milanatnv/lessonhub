/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  sassOptions: {
    includePaths: [
      'bower_components/compass-mixins/lib',
      'bower_components/animate.css'
    ]
  },
  gzip: {
    keepUncompressed: true
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
//
app.import({
  development: 'bower_components/bootstrap/dist/js/bootstrap.js',
  production: 'bower_components/bootstrap/dist/js/bootstrap.min.js'
});
app.import({
  development: 'bower_components/bootstrap/dist/css/bootstrap.css',
  production: 'bower_components/bootstrap/dist/css/bootstrap.min.css'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  destDir: 'fonts'
});
app.import({
  development: 'bower_components/animate.css/animate.css',
  production: 'bower_components/animate.css/animate.min.css'
});

// PhantomJS misses some ES5 features like Function.prototype.bind
// and Function.prototype.apply, needed across codebase.
//
// TODO: remove once PhantomJS 2.0.0 is released
app.import({
  test: 'bower_components/es5-shim/es5-shim.js'
});

app.import({
  test: 'bower_components/jquery-mockjax/jquery.mockjax.js'
});

module.exports = app.toTree();


