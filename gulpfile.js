var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    babel = require("gulp-babel");
/**
 * uglify: js压缩，删除空格、注释
 */
gulp.task('jstask', function() {
  // **匹配static/js的0个或多个子文件夹
  var jstask = gulp.src('app/static/js/**/*.js')
    .pipe(babel()) // es6转es5
    .pipe(uglify())
    .pipe(gulp.dest('dist/static/js'));
  return jstask;
});

/**
 * htmlmin: 压缩html
 * task名称不能跟处理函数同名
 */
gulp.task('testHtmlmin', function () {
  gulp.run('jstask', (err) => {
    console.log('run jstask:', err);
  });
  var options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
  };
  var testHtmlmin = gulp.src('app/views/**/*.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/views'));
  return testHtmlmin;
});

gulp.task('watch', function() {
  // gulp.watch('app/static/js/**/*.js', ['jstask']);
  gulp.watch('app/static/js/**/*.js', (event) => {
    console.log('Event type:' + event.type);
    console.log('Event path:' + event.path);
    gulp.run('jstask', (err) => {
      console.log('run jstask:', err);
    });
  });
});

