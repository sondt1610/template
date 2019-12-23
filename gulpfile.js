var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('hello', async function () {
    console.log('Hello Zell');
});

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
  })

gulp.task('watch', gulp.series('sass',  function (){
    console.log(123);
    gulp.task('browserSync');
    gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
    // Other watchers
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
}, 'browserSync'))

