import gulp from "gulp";
import plumber from "gulp-plumber";
import typescript from 'gulp-typescript';
import PATH from '../../config';

gulp.task('typescript', ()=>{

  var opt = { target: 'ES5', module: 'commonjs' };

  return gulp.src([PATH.dev.js + '**/*.js','!' + PATH.dev.js + 'lib/**/*.js'])
    .pipe(plumber())
    // .pipe(sourcemaps.init()) /* ソースマップを出力させる場合 */
    .pipe(typescript(opt))
    // .pipe(sourcemaps.write(".")) /* ソースマップを出力させる場合 */
    .pipe(gulp.dest(PATH.release.js));
});