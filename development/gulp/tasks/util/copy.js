import gulp from 'gulp';
import PATH from '../../config';

gulp.task('copyResource', ()=>{

    gulp
      .src(PATH.dev.resource + '/**/*')
      .pipe(gulp.dest(PATH.release.resource));

});

