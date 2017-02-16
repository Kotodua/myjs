var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass');

gulp.task('hello', function() {
  console.log('Hello Zell');
});


gulp.task('sass', function(){
  gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
})
