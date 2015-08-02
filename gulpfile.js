var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');

gulp.task('less', function() {
	gulp.src('*.less').
	pipe(less()).
	pipe(gulp.dest('.'));  //gulp.dest specifies a folder
});

gulp.task('default', []);