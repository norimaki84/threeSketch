import gulp from "gulp";
import browserSync from "browser-sync";

gulp.task("browserSync", ()=>{
	browserSync.init({
		notify: false,
		open: 'external',
		server: {
			baseDir: '../src/'
		}
	});
});

gulp.task("sync", ()=>{
    browserSync.reload();
});
