var gulp = require('gulp');
var haml = require('gulp-haml');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var imageop = require('gulp-image-optimization');

gulp.task('haml', function () {
  gulp.src('./*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'));
});

gulp.task('images', function(cb) {
    gulp.src(['assets/images/**/*.png','assets/images/**/*.jpg','assets/images/**/*.gif','assets/images/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('public/assets/images')).on('end', cb).on('error', cb);
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
  gulp.watch('./assets/sass/*.scss', gulp.series('styles'));
  gulp.watch('./*.haml', gulp.series('haml'));
  gulp.watch('./assets/javascripts/*.coffee', gulp.series('coffee'));
});
