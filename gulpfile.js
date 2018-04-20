const gulp = require('gulp');
const gulpless = require('gulp-less');

gulp.task('watch',() => {
	gulp.watch(['./public/less/**/*.less'],['less']);
})

gulp.task('less',() => {
	//Find the file to convert - .src
	//convert it - .pipe and gulpless
	//send it to where we want it to live - .pipe and gulp.dest
	gulp.src('./public/less/style.less')
		.pipe(gulpless())
		.pipe(gulp.dest('./public/css/'));
})

gulp.task('default', ['less','watch']);