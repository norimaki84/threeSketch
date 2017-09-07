import gulp from "gulp";
import plumber from "gulp-plumber";
import coffee from 'gulp-coffee';
import PATH from '../../config';

gulp.task('coffee', ()=>{
  return gulp.src([PATH.dev.js + '**/*.js','!' + PATH.dev.js + 'lib/**/*.js'])
    .pipe(plumber())
    // .pipe(sourcemaps.init()) /* ソースマップを出力させる場合 */
    .pipe(coffee({bare:true}))
    // .pipe(sourcemaps.write(".")) /* ソースマップを出力させる場合 */
    .pipe(gulp.dest(PATH.release.js));
});