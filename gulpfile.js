var gulp = require('gulp');

gulp.task('jstask', function() {
  // add js 压缩
  var jstask = gulp.src('app/static/js/**/*.js')
  .pipe(uglify())  // js压缩
  .pipe(gulp.dest('dist/static/js'));
  return jstask;
});