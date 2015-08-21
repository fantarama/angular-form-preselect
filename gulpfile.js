var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('demo', function () {
    connect.server({
        root: "./",
        port: "8088",
        livereload: false
    });
});

gulp.task('clean', function () {
    del(['./js/templates.js', './release/*.js']);
})

gulp.task('release-template', function () {
    return gulp.src('./html/*.html').
        pipe(templateCache('templates.js', {root: "/html/", module: "angular-form-preselect"})).
        pipe(gulp.dest('./js'));
});

gulp.task('release', ['clean', 'release-template'], function () {
    gulp.src(['./js/*.js']).
        pipe(concat('angular-form-preselect.js')).
        pipe(uglify()).
        pipe(gulp.dest('./release'));
});
