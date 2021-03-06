var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', async function () {
    console.log('Hello Zell');
});

// compile scss file into css file
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

gulp.task('watch', gulp.series('sass',  function (){
    // init browser server 
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        port: 3001
    })
    // compile scss file into css file
    gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
    // Other watchers
    // Reloads the browser whenever HTML or CSS or JS files change
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/**/*.js").on('change', browserSync.reload);
    gulp.watch("app/scss/**/*.scss").on('change', browserSync.reload);
}))

