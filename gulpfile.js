// Generated on 2017-02-22 using generator-angular 0.15.1
'use strict';

var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('')
      .pipe(server({
        livereload: true,
        open: true
      }));
});