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

gulp.task('copyIndex', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('copyFonts', function () {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('watch', function () {
  gulp.watch('styles/**/*.scss', {cwd: './src/'}, ['sass']);
  gulp.watch('images/**/*', {cwd: './src/'}, ['imagemin']);
  gulp.watch('index.html', {cwd: './src/'}, ['copyIndex']);
  gulp.watch('fonts/**/*', {cwd: './src/'}, ['copyFonts']);
});

gulp.task('default', [ 'imagemin', 'sass', 'copyIndex', 'copyFonts' ]);
