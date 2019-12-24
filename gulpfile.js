const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const csso         = require('gulp-csso');
// const sourcemaps   = require('gulp-sourcemaps');
// const rmEmtyLine   = require('gulp-remove-empty-lines');
// const gulpHeader   = require('gulp-header');

// Compile Sass & Inject Into Browser
// gulp.task('sass', function() {
//     return gulp.src(['css/*.scss'])
//         .pipe(sourcemaps.init())
//         .pipe(sass({outputStyle: 'compact'}))
//         .pipe(gulpHeader('@charset "utf-8";'))
//         .pipe(rmEmtyLine())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         // .pipe(csso())
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest("css/"))
//         .pipe(browserSync.stream());
// });


// Watch Sass & Serve
// gulp.task('serve', ['sass'], function() {
//     browserSync.init({
//         server: "./"  
//     });

//     gulp.watch(['css/*.scss'], ['sass']);
//     gulp.watch("./*.html").on('change', browserSync.reload);
// });

gulp.task('nam', function() {
    browserSync.init({
        server: "./app/"  
    });
    gulp.watch("./app/*.html").on('change', browserSync.reload);
});

// Default Task
// gulp.task('default', ['serve']);