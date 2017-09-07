import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpack from 'webpack-stream';
import PATH from '../../config';

gulp.task('webpack', ()=>{

	gulp
			.src(PATH.dev.devjs + 'src/**/*.js')
			.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
			.pipe(webpack(require('../../webpack.config.js')))
			.pipe(gulp.dest(PATH.dev.js));

});
