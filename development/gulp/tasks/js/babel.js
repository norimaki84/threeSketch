import gulp from "gulp";
import plumber from "gulp-plumber";
import babel from 'gulp-babel';
import es2015 from 'babel-preset-es2015';
import PATH from '../../config';

gulp.task('babel', ()=>{
  return gulp.src([PATH.dev.devjs])
    .pipe(plumber())
    .pipe(babel({presets: [es2015]}))
    .pipe(gulp.dest(PATH.dev.devjs));
});