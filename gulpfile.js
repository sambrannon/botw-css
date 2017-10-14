'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', function () {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
});

gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('watch', function () {
  gulp.watch('styles/**/*.scss', {cwd: './src/'}, ['sass']);
  gulp.watch('images/**/*', {cwd: './src/'}, ['imagemin']);
});

gulp.task('default', [ 'imagemin', 'sass' ]);
