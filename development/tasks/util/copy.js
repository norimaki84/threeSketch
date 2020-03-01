import gulp from 'gulp';
import PATH from '../../config';

gulp.task('copyResource', ()=>{

    gulp
      .src(PATH.dev.resource + '/**/*')
      .pipe(gulp.dest(PATH.release.resource));

});

gulp.task('copyJS', ()=>{

	gulp.src([PATH.dev.js + '**/*.js', '!' + PATH.dev.js + '_devjs/**/*'])
		.pipe(gulp.dest(PATH.release.js));

});

gulp.task("copyPHP", function() {
	gulp.src(PATH.dev.root + '**/*.php')
		.pipe(gulp.dest(PATH.release.root));
});
