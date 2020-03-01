import gulp from "gulp";
import strip_debug from 'gulp-strip-debug';
let uglify = require('gulp-uglify-es').default;
import PATH from '../../config';

gulp.task('minifyJS', ()=>{

  gulp.src([PATH.dev.js + '**/*.js', '!' + PATH.dev.js + '_devjs/**/*'])
      .pipe(strip_debug())
      .pipe(uglify({
        output:{
          comments: /^!/
        }
      }))
      .pipe(gulp.dest(PATH.release.js));

});
