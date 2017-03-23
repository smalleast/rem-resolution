(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //test
  gulp.task('scripts',function() {
    return gulp.src('src/*.js')
      .pipe(gulp.dest('dist'))
      .pipe($.uglify())
      .pipe($.rename({extname:'.min.js'}))
      .pipe(gulp.dest('dist'));
  });

}());
