const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const wait = require('gulp-wait');
const uglifyCSS = require('gulp-uglifycss');
const uglifyJS = require('gulp-uglify'); 

//Compile SCSS into CSS
function style() {
    //1. Where is my SCSS file?
    return gulp.src('./scss/**/*.scss')
        //2. Pass that file through SASS Compiler.
        .pipe(sass().on('error', sass.logError)) //Throw shortened error if you make a mistake
        //3. Where do I save the compiled CSS?
        .pipe(gulp.dest('./css'))
        //4. Stream changes to all browsers.
        .pipe(browserSync.stream());
}

//Convert JS files to ES5 for IE
function explorer() {
    //1. Where is my JS file?
    return gulp.src('./js/**/*.js')
        //2. Pass that file through Babel compiler.
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        //3. Rename the output file to be .es5.js 
        .pipe(rename({
            suffix:'.es5'
        }))
        //4. Where do I save the compiled JS?
        .pipe(gulp.dest('./dev-saved'));
}

//Minify CSS to a dist folder
function minifycss() {
    //1. Where is my CSS file?
    return gulp.src('./css/**/*.css')
        //2. Make the task wait so that Sass has compiled and outputted.
        .pipe(wait(1500))
        //3. Pass that file through CSS Uglifier.
        .pipe(uglifyCSS())
        //4. Rename the output file to be .min.css
        .pipe(rename({
            suffix:'.min'
        }))
        //5. Where do I save the minified CSS?
        .pipe(gulp.dest('./dist/'));
}

//Minify JS to a dist folder
function minifyjs() {
    //1. Where is my JS file?
    return gulp.src('./dev-saved/**/*.js')
        //2. Make the task wait so that JS has compiled for es5 and outputted.
        .pipe(wait(1500))
        //3. Pass that file through JS Uglifier.
        .pipe(uglifyJS())
        //4. Rename the output file to be .min.js
        .pipe(rename({
            suffix:'.min'
        }))
        //5. Where do I save the minified JS?
        .pipe(gulp.dest('./dist/'));
}

exports.style = style;
exports.explorer = explorer;
exports.minifycss = minifycss;
exports.minifyjs = minifyjs;
exports.watch = watch;

// Watch task for changes 
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', explorer);
    gulp.watch('./css/*.css', minifycss);
    gulp.watch('./dev-saved/*.js', minifyjs);
}