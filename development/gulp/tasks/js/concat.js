import gulp from "gulp";
import plumber from "gulp-plumber";
import concat from 'gulp-concat';
import PATH from '../../config';

// ------------------------------------------------------------
//  library
// ------------------------------------------------------------
gulp.task('concatJSLibs', ()=>{

    let src = [
                PATH.dev.devjs + 'libs/jquery.js',
                PATH.dev.devjs + 'libs/TweenMax.min.js',

                //PATH.dev.devjs + 'libs/pixi.min.js',
                PATH.dev.devjs + 'libs/minMatrix.js',
                PATH.dev.devjs + 'libs/three.min.js',
                PATH.dev.devjs + 'libs/GPUComputationRenderer.js',
                PATH.dev.devjs + 'libs/loaders/OBJLoader.js',
                PATH.dev.devjs + 'libs/loaders/webfontloader.js',
                PATH.dev.devjs + 'libs/Stats.js',
                PATH.dev.devjs + 'libs/dat.gui.min.js',

                PATH.dev.devjs + 'libs/three_post/postprocessing/EffectComposer.js',
                PATH.dev.devjs + 'libs/three_post/postprocessing/RenderPass.js',
                PATH.dev.devjs + 'libs/three_post/postprocessing/ShaderPass.js',
                PATH.dev.devjs + 'libs/three_post/postprocessing/MaskPass.js',
                PATH.dev.devjs + 'libs/three_post/shaders/CopyShader.js',
                PATH.dev.devjs + 'libs/three_post/shaders/VerticalBlurShader.js',
                PATH.dev.devjs + 'libs/three_post/shaders/HorizontalBlurShader.js',

                PATH.dev.devjs + 'libs/ua-parser.min.js'
              ];

    gulp.src(src)
        .pipe(plumber())
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(PATH.dev.js + 'common/'));

});