var gulp = require('gulp');
var haml = require('gulp-haml');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');

gulp.task('haml', function () {
  gulp.src('./*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'));
});

gulp.task('coffee', function() {
  gulp.src('assets/javascripts/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('styles', function() {
  gulp.src('assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/css/'));
});

//Watch task
gulp.task('default', function() {
  gulp.watch('./assets/sass/*.scss',['styles']);
  gulp.watch('./*.haml',['haml']);
  gulp.watch('./assets/javascripts/*.coffee', ['coffee']);
});
